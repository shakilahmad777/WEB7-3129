import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Watch() {
    const watchs = useLoaderData()
    return (
        <div className='grid md:grid-cols-3 gap-2.5'>
            {
                watchs.map(watch => <div className='border border-amber-400 rounded p-6'>
                    <div className='conik-rel'>
                        <div className='conik p-1'>
                            <img width={'100%'} className='h-50 rounded gallary-items' src={watch.imageUrl} alt="" />
                        </div>
                    </div>
                    <h2>{watch.name}</h2>
                    <p><small>${watch.price}</small></p>
                    <p><small>Brand: {watch.brand}</small></p>
                    <p><small>Stock: {watch.stock}</small></p>
                </div>)
            }
        </div>
    )
}
