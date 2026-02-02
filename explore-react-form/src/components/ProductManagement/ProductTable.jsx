import React from 'react'
import './Products.css'

export default function ProductTable({ products }) {
    
    return (
        <div>
            <h3>Product Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
