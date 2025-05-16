import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getStoredReadList, getStoredWishList } from '../../utility/addToStoredList/addToDb';
import { useEffect, useState } from 'react';
import BooksDetail from '../BooksDetail/BooksDetail';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readBook, setReadBook] = useState([]);
    const [myWishList, setMyWishList] = useState([]);
    const [short, setShort] = useState('');


    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadBook(readBookList);
    }, [])

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const myWishList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
        setMyWishList(myWishList);
    }, []);

    const handleShort = shortType => {
        setShort(shortType);

        // sort by ratings
        if(shortType === 'Ratings') {
            const shortRatingsReadList = [...readBook].sort((a, b) => a.rating - b.rating)
            setReadBook(shortRatingsReadList)
        }

        if(shortType === 'Ratings') {
            const shortRatingsWishList = [...myWishList].sort((a, b) => a.rating - b.rating)
            setMyWishList(shortRatingsWishList)
        }
        // sort by no of page
        if(shortType === 'No of Page') {
            const shortNoOfPagesReadList = [...readBook].sort((a, b) => a.totalPages - b.totalPages)
            setReadBook(shortNoOfPagesReadList)
        }
        if(shortType === 'No of Page') {
            const shortNoOfPagesWishList = [...myWishList].sort((a, b) => a.totalPages - b.totalPages)
            setMyWishList(shortNoOfPagesWishList)
        }
    }

    return (
        <div>
            <h3 className='text-center p-5 my-2.5 bg-gray-100'>Listed Books</h3>
            <details className="dropdown grid justify-center">
                <summary className="btn m-1">
                    {
                        short ? `Short by: ${ short }` : 'Short by'
                    }
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleShort('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleShort('No of Page')}><a>No of Page</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList className={'flex gap-2.5'}>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books i Read: {readBook.length}</h2>
                    <div className="grid gap-5 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
                        {
                        readBook.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List: {myWishList.length}</h2>
                    <div className="grid gap-5 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
                        {
                        myWishList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;