import React from 'react'

export default function ProductForm({ handleNewProducts }) {
    const handleProductSubmit = (e) => {    // this is form submit function
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const newProduct = {
            name,
            price,
            quantity
        }
        handleNewProducts(newProduct);

        // console.log(name, price, quantity, newProduct)
    }

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleProductSubmit} className='mt-3.5 p-1 font-bold rounded form-content-effect'>
                <div className="form-content p-10 bg-slate-600">
                    <input type="text" name="name" placeholder='Product Name' /><br />
                    <input type="text" name="price" placeholder='Product Price' /><br />
                    <input type="text" name="quantity" placeholder='Product Quantity' /><br />
                    <input type="submit" value="Submit" className='submit' />
                </div>
            </form>
        </div>
    )
}
