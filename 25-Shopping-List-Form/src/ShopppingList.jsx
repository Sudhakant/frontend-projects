import { useState } from "react";

export default function ShoppingList(){
    const [items, setItems] = useState([
        {id: 1, product: 'Bananas', quantity: 8},
        {id: 2, product: 'Eggs', quantity: 12},
    ]);

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(item => <li key={item.id}>{item.product} - {item.quantity}</li>)}
            </ul>
        </div>
    )
}