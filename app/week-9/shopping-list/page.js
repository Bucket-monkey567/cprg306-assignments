"use client";
import {useState} from "react";

import { useUserAuth } from "../_utils/auth-context";

import ItemList from "./item-list"
import NewItem from "./new-item"
import itemsData from "./items"
import MealIdeas from "./meal-ideas"

export default function Page() {
    const { user, logOut } = useUserAuth();

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
        <div className="flex justify-center p-4">
            <main className="flex gap-8 w-full max-w-6xl">
            {/* Left column: NewItem + ItemList */}
                <div className="flex-1">
                    <h1 className="bg-cyan-200 text-cyan-950 text-4xl p-4 mb-4 rounded-2xl"> Shopping List </h1>
                    <button onClick={logOut}>Log Out</button>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

            {/* Right column: MealIdeas */}
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItem} />
                </div>
            </main>
        </div>
    );
}
