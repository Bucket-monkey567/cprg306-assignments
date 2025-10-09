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
        alert(`Added ${quantity} ${name} to category ${category}`);
        setName("");
        setCategory("produce");
        setQuantity(1);
    }

    return(
        <section>
            {/* Name input */}
                <input className="m-2.5 p-2 border-2 border-fuchsia-300 rounded-md" type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
            {/* Category dropdown */}
                <select className="m-2.5 p-2 border-2 border-fuchsia-300 rounded-md bg-black text-white" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="produce">Produce</option>
                    <option value="meat">Meat</option>
                    <option value="dairy">Dairy</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="household">Household</option>
                </select>
            {/* Quantity buttons */}
                <h2 className="m-2.5">Quantity: {quantity}</h2>
                <button className="bg-fuchsia-300 text-black mx-2 px-2 py-1 rounded-md" onClick={decrement}>Decrease</button>
                <button className="bg-fuchsia-300 text-black mx-2 px-2 py-1 rounded-md" onClick={increment}>Increase</button>
            {/* Submit button */}
                <button onClick={handleSubmit} className="m-2.5 p-2 border-2 border-fuchsia-300 rounded-md">Submit</button>
        </section>
    )
}