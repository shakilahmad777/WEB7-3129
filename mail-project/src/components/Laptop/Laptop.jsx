import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import './Laptop.css'

export default function Laptop() {
	const laptops = useLoaderData();
	// const laptopsShort = laptops.map(laptop => )
	// const {name, brand, price, stock} = laptops;
	console.log('laptops', laptops)
	return (
		<div className='grid md:grid-cols-3 gap-2.5'>
			{
				laptops.map(laptop => <div className='border border-amber-400 rounded p-6' key={laptop.id}>
					<div className='conik-rel'>
						<div className='conik p-1'>
							<img width={'100%'} className='h-50 rounded gallary-items' src={laptop.imageUrl} alt="" />
						</div>
					</div>
					<div>
						<h3>{laptop.name}</h3>
						<h3>${laptop.price}</h3>
						<p><small>Brand: {laptop.brand}</small></p>
						<p><small>Stock: {laptop.stock}</small></p>
						<Link to={`/laptop/${laptop.id}`}><button type='button' className='btn'>Show Details</button></Link>
					</div>
				</div>)
			}
		</div>
	)
}
