import React, { useState } from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'

export default function ProductManagement() {
    const [products, setProducts] = useState([]);
    const handleNewProducts = newProduct => {
        const newProducts = [...products, newProduct];
        setProducts(newProducts)
    }

    console.log('this is creezyyy', products)
  return (
    <div>
        <h3 className='text-2xl'>Product Management</h3>
        <ProductForm handleNewProducts={handleNewProducts}></ProductForm>
        <ProductTable products={products}></ProductTable>
    </div>
  )
}
