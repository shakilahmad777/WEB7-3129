import React from 'react'

export default function Mobile({ mobile }) {
	const { id, name, price, brand, stock,
		imageUrl } = mobile;
	return (
		<div className='border border-amber-400 rounded p-6'>
			<div className='conik-rel'>
				<div className='conik p-1'>
					<img width={'100%'} className='h-50 rounded gallary-items' src={imageUrl} alt="" />
				</div>
			</div>
			<h2>{name}</h2>
			<p><small>${price}</small></p>
			<p><small>Brand: {brand}</small></p>
			<p><small>Stock: {stock}</small></p>
		</div>
	)
}
