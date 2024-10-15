import { useState } from "react";

export default function ShoppingListForm(){
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0,
    });

    const handleChange = (evt) => {
        setFormData((currData) => {
            return {
                ...currData,
                [evt.target.name]: [evt.target.value]
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('TEST')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Product is: {formData.product}</h1>
            <label htmlFor="product">Product Name</label>
            <input 
                type="text" 
                placeholder="Product Name"
                name="product"
                id="product"
                value={formData.product}
                onChange={handleChange} 
            />
            <label htmlFor="quantity">Quantity Name</label>
            <input 
                type="number" 
                placeholder="0"
                name="quantity"
                id="quantity"
                value={formData.quantity}
                onChange={handleChange} 
            />
        </form>
    )
}