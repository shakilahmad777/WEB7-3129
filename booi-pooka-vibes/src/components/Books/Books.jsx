import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className="">
            <h1 className="font-bold py-7 text-2xl md:text-3xl text-center lg:text-5xl">
                Books
            </h1>
            <div className="grid gap-5 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(book => <Book kye={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;