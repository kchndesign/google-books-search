import './App.css';
import BookBox from './components/BookBox/';
import { useState } from 'react';
import SearchResults from './components/SearchResults';
import BookImage from './components/BookImage';

function App() {
    const [search, setSearch] = useState('');
    const [bookList, setBookList] = useState([]);

    const fetchBookList = async (query) => {
        const string = query.split(' ').join('+');
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${string}&maxResults=12`
        );
        const data = await response.json();
        return data.items.map((item) => {
            return { ...item.volumeInfo, id: item.id };
        });
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        setBookList(Array(12).fill(null));
        setBookList(await fetchBookList(search));
    };

    return (
        <div>
            <h1>My Reading List</h1>
            <p>
                Add books to your wishlist and review books on your
                bookshelf.
            </p>
            <form onSubmit={handleSearchSubmit}>
                <label htmlFor="search">
                    Search Books
                    <input
                        type="text"
                        onChange={handleSearchChange}
                        value={search}
                    />
                </label>
                <input type="submit" />
            </form>

            <SearchResults>
                {bookList.map((book, index) => {
                    return (
                        <BookBox book={book} key={book?.id ?? index}>
                            <BookImage book={book} />
                        </BookBox>
                    );
                })}
            </SearchResults>
        </div>
    );
}

export default App;
