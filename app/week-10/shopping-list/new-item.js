"use client"
import {useState} from "react";

export default function NewItem({onAddItem}){

    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    const generateId = () => {
        let id = "";
        for(let i = 0; i < 10; i++){
            id += chars[Math.floor(Math.random() * chars.length)];
        }
        return id
    }

    const [item, setItem] = useState({id: generateId(), name:"", quantity:1, category:"produce"});

    const decrement = () => {
        if(item.quantity > 1){
            setItem({...item, quantity:item.quantity-1});
        }
    }
 
    const increment = () => {
        if(item.quantity < 20){
            setItem({...item, quantity:item.quantity+1});
        }
    }

    const buttonColorMin = item.quantity <= 1 ? "bg-gray-300" : "bg-blue-400";
    const buttonColorMax = item.quantity >= 20 ? "bg-gray-300" : "bg-blue-400";

    const handleSubmit = (e) => {
        e.preventDefault();
        if(item.name === ""){
            alert("Please enter a name for the item");
            return;
        }
        
        console.log(`Item submitted:`, item);
        // alert(`Added ${item.quantity} ${item.name} to category ${item.category}. id: ${item.id}`);
        
        onAddItem({...item});
        setItem({id: generateId(), name: "", quantity:1, category:"produce"})

    }

    return(
        <section className="flex flex-col items-center bg-white rounded-2xl my-2">
            {/* Name input */}
                <section className="flex flex-row">
                    <input className="m-2.5 p-2 border-2 border-blue-400 rounded-md text-black" name="item-name" type="text" placeholder="Item Name" value={item.name} onChange={(e) => setItem({...item, name:e.target.value})} />
                    <select className="m-2.5 p-2 border-2 border-blue-400 rounded-md bg-white text-black" name="category-select" value={item.category} onChange={(e) => setItem({...item, category:e.target.value})}>
                        <option value="produce">Produce</option>
                        <option value="meat">Meat</option>
                        <option value="dairy">Dairy</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="household">Household</option>
                        <option value="bakery">Bakery</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="other">Other</option>
                        
                    </select>
                </section>
            {/* Quantity buttons */}
                <section className="flex flex-row">
                    <h2 className="m-2.5 text-black">Quantity: {item.quantity}</h2>
                    <button className={`${buttonColorMin} text-white rounded-md h-10 w-10 m-2`} onClick={decrement}>-</button>
                    <button className={`${buttonColorMax} text-white rounded-md h-10 w-10 m-2`} onClick={increment}>+</button>
                    <button onClick={handleSubmit} className="m-2.5 p-2 px-10 border-2 bg-blue-400 rounded-md">Submit</button>
                </section>
                    {/* Category dropdown */}
                    
            {/* Submit button */}
        </section>
    )
}