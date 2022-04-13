import Styles from './App.module.scss';
import BookBox from './components/BookBox/';
import { useState } from 'react';
import SearchResults from './components/SearchResults';
import BookImage from './components/BookImage';
import Search from './components/Search';
import Header from './components/Header';
import BookModal from './components/BookModal/';

function App() {
    const [search, setSearch] = useState('');
    const [bookList, setBookList] = useState([]);
    const [currentModalBook, setCurrentModalBook] = useState(null);

    // function for searching with a string for query parameter
    const fetchBookList = async (query) => {
        const string = query.split(' ').join('+');
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${string}&maxResults=12`
        );
        const data = await response.json();
        return data.items.map((item) => {
            return {
                ...item.volumeInfo,
                id: item.id,
                selfLink: item.selfLink,
            };
        });
    };

    // callback event to sync search string state and
    // the input.value
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    // callback event to call fetchBookList when the user
    // clicks enter
    // first it initialises 12 books.
    // then awaits the results of the search
    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        setBookList(Array(12).fill(null));
        setBookList(await fetchBookList(search));
    };

    // handler to display modal
    const modalMount = (book) => {
        setCurrentModalBook(book);
    };

    // handler to hide the modal
    const modalUnmount = () => {
        setCurrentModalBook(null);
    };

    return (
        <div className={Styles.App}>
            <Header />

            <Search
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
            />

            <SearchResults>
                {bookList.map((book, index) => {
                    return (
                        <BookBox
                            book={book}
                            key={book?.id ?? index}
                            modalMount={modalMount}
                        >
                            <BookImage book={book} />
                        </BookBox>
                    );
                })}
            </SearchResults>
            {currentModalBook == null ? null : (
                <BookModal
                    book={currentModalBook}
                    modalUnmount={modalUnmount}
                />
            )}
        </div>
    );
}

export default App;
