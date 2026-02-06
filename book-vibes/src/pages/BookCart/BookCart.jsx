import React from 'react'

export default function BookCart({ book }) {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className='shadow-2xl sm:flex md:block lg:block w-auto p-5 rounded text-bold'>
            <sectin className='sm:w-[320px] my-5 flex justify-center'>
                <img src={image} className='w-[120px] rotate-x-15 -rotate-y-30 rounded' alt="" />
            </sectin>
            <section className='sm:w-[280px]'>
                <article className='sm:flex gap-3 md:gap-5'>
                    <p><small>{tags}</small></p>
                    <p><small>{publisher}</small></p>
                </article>
                <h2 className='sm:my-5 md:my-0 md:my-5'>{bookName}</h2>
                <p><small>By: {author}</small></p>
                <section className="flex justify-between inset-shadow-2xs mt-3 pt-3 sm:mt-15 md:mt-3">
                    <p>{category}</p>
                    <p>{rating} <span className='font-bold text-xl text-[#23BE0A]'>&#9957;</span></p>
                </section>
            </section>
        </div>
    )
}
