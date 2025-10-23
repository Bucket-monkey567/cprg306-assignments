"use client";
import {useState} from "react";

import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from "./items"

export default function Page() {

    const [items, setItems] = useState(itemsData);
    
    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    return (
        <div className="flex justify-center items-center">
            <main >
                <h1 className="bg-cyan-200 text-cyan-950 text-4xl p-4 w-1/1.5 m-2 rounded-2xl">Shopping list</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items}/>
            </main>
        </div>
    );
}
