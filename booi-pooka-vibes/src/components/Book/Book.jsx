import { Link } from "react-router-dom";
import ratingImg from "../../../public/Frame.svg";

const Book = ({book}) => {

    const {bookId,bookName, image, author, category, tags, rating} = book;

    return (
        <Link to={`book/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 shadow-sm     border border-gray-300">
                    <figure className="m-6 p-8 rounded bg-gray-100">
                        <img
                        src={image}
                        className="h-[166px] duration-300 ease-in-out hover:rounded hover:w-64 hover:scale-125 hover:rotate-x-0 hover:rotate-y-0 rotate-x-15 -rotate-y-30"
                        alt={bookName} />
                    </figure>
                    <div className="card-body">
                        <div className="flex justify-center gap-3 ">
                            {
                                tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-100 text-green-500 font-bold lg:text-[16px] rounded-2xl px-2.5">{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title py-3.5 font-bold md:text-2xl lg:text-3xl">{bookName}</h2>
                        <p className="border-b-2 border-dotted pb-3.5">By : {author}</p>
                        <div className="flex justify-between">
                            <p>{category}</p>
                            <p className="flex gap-2 justify-end">{rating} <img src ={ratingImg} className="h-5" alt="rating star" /> </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;