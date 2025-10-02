"use client"
import {useState} from "react";

export default function NewItem(){
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

    return(
        <section>
            <h1 className="m-2.5">Quantity: {quantity}</h1>
            <button className="bg-fuchsia-300 text-black mx-2 px-2 py-1 rounded-md" onClick={decrement}>Decrease</button>
            <button className="bg-fuchsia-300 text-black mx-2 px-2 py-1 rounded-md" onClick={increment}>Increase</button>
        </section>
    )
}