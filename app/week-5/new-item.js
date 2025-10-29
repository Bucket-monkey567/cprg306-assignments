"use client"
import {useState} from "react";

export default function NewItem(){
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    var [quantity, setQuantity] = useState(1);
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    const buttonColorMin = quantity <= 1 ? "bg-gray-300" : "bg-blue-400";
    const buttonColorMax = quantity >= 20 ? "bg-gray-300" : "bg-blue-400";


    const increment = () => {
        if(quantity < 20){
            setQuantity(quantity + 1);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === ""){
            alert("Please enter a name for the item");
            return;
        }
        const item = {
            name: name,
            quantity: quantity,
            category: category
        }
        console.log(`Item submitted:`, item);
        alert(`Added ${item.quantity} ${item.name} to category ${item.category}`);
        setName("");
        setCategory("produce");
        setQuantity(1);
    }

    return(
        <section className="flex flex-col items-center bg-white">
            {/* Name input */}
                <input className="m-2.5 p-2 border-2 border-blue-400 rounded-md text-black" type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
            {/* Quantity buttons */}
                <h2 className="m-2.5 text-black">Quantity: {quantity}</h2>
                <section className="flex flex-row">
                    <button className={`${buttonColorMin} text-white mx-2 p-2 py-0.5 px-10 rounded-md`} onClick={decrement}>-</button>
                    <button className={`${buttonColorMax} text-white mx-2 p-2 py-0.5 px-10 rounded-md`} onClick={increment}>+</button>
                    {/* Category dropdown */}
                    <select className="m-2.5 p-2 border-2 border-blue-400 rounded-md bg-white text-black" value={category} onChange={(e) => setCategory(e.target.value)}>
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
            {/* Submit button */}
                <button onClick={handleSubmit} className="m-2.5 p-2 border-2 bg-blue-400 rounded-md">Submit</button>
        </section>
    )
}