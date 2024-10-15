import { useState } from "react";
import ShoppingListForm from './ShoppingListForm.jsx';

export default function ShoppingList(){
    const [items, setItems] = useState([
        {id: 1, product: 'Bananas', quantity: 8},
        {id: 2, product: 'Eggs', quantity: 12},
    ]);

    const addItem = () => {
        return [
            ...items,
            {id: 3}
        ]
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(item => <li key={item.id}>{item.product} - {item.quantity}</li>)}
            </ul>
        <ShoppingListForm addItem={addItem} />
        </div>
    )
}