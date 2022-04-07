import './App.css';
import BookBox from './components/BookBox/';
import { useState, useEffect } from 'react';

function App() {
    const testingBook = {
        title: 'testing',
        subtitle: 'testing subtitle',
        authors: ['Author 1', 'Author 2'],
    };

    const [search, setSearch] = useState('');
    const [bookList, setBookList] = useState({
        kind: 'placeholder',
        items: [testingBook],
    });

    const fetchBookList = async (query) => {
        const string = query.split(' ').join('+');
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${string}`,
        );
        const data = await response.json();
        return data;
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        setBookList(await fetchBookList(search));
    };

    useEffect(() => {
        console.log(bookList.items[0].volumeInfo);

        return () => {};
    }, [bookList]);

    return (
        <div>
            <h1>Hello World</h1>
            <p>This is a react app </p>
            <form onSubmit={handleSearchSubmit}>
                <label htmlFor="search">
                    <input
                        type="text"
                        onChange={handleSearchChange}
                        value={search}
                    />
                </label>
                <input type="submit" />
            </form>
            <p>{search}</p>

            <BookBox
                book={
                    bookList.kind == 'placeholder'
                        ? testingBook
                        : bookList.items[0].volumeInfo
                }
            />
            <BookBox book={testingBook} />
        </div>
    );
}

export default App;
