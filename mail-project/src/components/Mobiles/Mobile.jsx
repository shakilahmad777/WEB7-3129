import React from 'react'

export default function Mobile({mobile}) {
    const {id, name, price, brand, stock, 
        imageUrl} = mobile;
  return (
    <div>
        <img src={imageUrl} alt="" />
        <h2>{name}</h2>
        <p><small>${price}</small></p>
        <p><small>Brand: {brand}</small></p>
        <p><small>Stock: {stock}</small></p>
    </div>
  )
}
