import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToStoredReadList/addToDb";
import { addToStoredWishList } from "../../utility/addToStoredWishList/addToDb";

const BooksDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);

    const {bookId: currentBookId, bookName, image, review, author, category, tags, rating, totalPages, publisher, yearOfPublishing} = book;
    // console.log(book)

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    const handleWishList = (id) => {
        addToStoredWishList(id);
    }

    return (
        <div className="lg:flex md:justify-center md:w-2xl gap-10 lg:w-4xl mx-auto my-16">
            <div className="bg-gray-100 rounded-2xl py-15 px-20">
                <img src={image} className="lg:w-[2280px] lg:h-[380px] hover:rotate-y-0 hover:rotate-z-0 duration-300 ease-in-out hover:scale-110 rotate-y-25 rotate-z-5 rounded" alt={bookName} />
            </div>
            <div>
                <p className="card-title py-3.5 font-bold md:text-2xl lg:text-3xl">
                    {bookName}
                </p>
                <p className="pb-3.5 font-bold">By: {author}</p>
                <p className="border-b-gray-100 border-b-[2px] border-t-gray-100 border-t-[2px] py-1 font-bold">{category}</p>
                <p>
                    <b>Review :</b> {review}
                </p>
                <p className="flex gap-5.5 my-3 font-bold border-b-gray-100 border-b-[2px] pb-5"> Tag
                    {
                        tags.map((tag, index) => <button className="btn btn-xs bg-green-100 text-green-500 font-bold lg:text-[16px] rounded-2xl px-2.5" key={index}>{tag}</button>)
                    }
                </p>
                <p>
                    Number of Page {totalPages}
                </p>
                <p>
                    Publisher {publisher}
                </p>
                <p>
                    Year of Publishing {yearOfPublishing}
                </p>
                <p className="mb-5">
                    Rating {rating}
                </p>
                <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-2.5">Mark as Read</button>
                <button onClick={() => handleWishList(bookId)} className="btn bg-blue-400 text-white">Add to Wish List</button>
            </div>
        </div>
    );
};

export default BooksDetail;