import React from 'react'

export default function BookCart({ book }) {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className='shadow-2xl w-auto p-5 rounded text-bold'>
            <sectin className='sm:w-[320px] my-5 flex justify-center'>
                <img src={image} className='w-[120px] rotate-x-15 -rotate-y-30 rounded' alt="" />
            </sectin>
            <section className=''>
                <article className='sm:flex gap-3 md:gap-5'>
                    <p><small>{tags}</small></p>
                    <p><small>{publisher}</small></p>
                </article>
                <h2>{bookName}</h2>
                <p>By:4e3{author}</p>
            </section>
            <section className="flex justify-between inset-shadow-2xs mt-3 pt-3">
                <p>{category}</p>
                <p>{rating} <span className='font-bold text-xl text-[#23BE0A]'>&#9957;</span></p>
            </section>
        </div>
    )
}
