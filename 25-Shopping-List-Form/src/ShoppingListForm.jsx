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

    return (
        <form>
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
        </form>
    )
}