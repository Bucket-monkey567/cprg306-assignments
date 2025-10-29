"use client";
import {useState} from "react";

import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from "./items"
import MealIdeas from "./meal-ideas"

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemSelect = (item) => {
        let mealIngredient = item.name;
        mealIngredient = mealIngredient.replace(/\s+/g, '');
        setSelectedItem(mealIngredient);
    }
    
    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    return (
        <div className="flex justify-center items-center">
            <main >
                <h1 className="bg-cyan-200 text-cyan-950 text-4xl p-4 w-1/1.5 m-2 rounded-2xl">Shopping list</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>

                <div className = "flex-1">
                <MealIdeas ingredient={selectedItem}/>
                </div>
            </main>
        </div>
    );
}
