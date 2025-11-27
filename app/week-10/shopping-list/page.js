"use client";
import {useState, useEffect} from "react";

import { useUserAuth } from "../_utils/auth-context";

import ItemList from "./item-list"
import NewItem from "./new-item"
import MealIdeas from "./meal-ideas"

import {getItems, addItem} from "../_services/shopping-list-service";


export default function Page() {
    const { user, firebaseSignOut } = useUserAuth();

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const loadItems = async () => {
        const rawItems = await getItems(user.uid);
        let items = []
        rawItems.forEach((item) =>{
            items.push(item[1]);
        })
        setItems(items);
    }
    
    useEffect(() => {
        async function loadItems(){
            const rawItems = await getItems(user.uid);
            let items = []
            rawItems.forEach((item) =>{
                items.push(item[1]);
            })
            setItems(items);

        }
        loadItems();
    }, [items]);
    
    const handleItemSelect = (item) => {
        let mealIngredient = item.name;
        mealIngredient = mealIngredient.replace(/\s+/g, '');
        setSelectedItem(mealIngredient);
    }
    
    const handleAddItem = (item) => {
        addItem(user.uid, item);

    }

    if(user != null){

        return (
            <div className="flex justify-center p-4">
                <main className="flex gap-8 w-full max-w-6xl">
                {/* <p>Hi {user.uid}</p> */}
                {/* Left column: NewItem + ItemList */}
                    <div className="flex-1">
                        <h1 className="bg-cyan-200 text-cyan-950 text-4xl p-4 mb-4 rounded-2xl"> Shopping List </h1>
                        <button onClick={firebaseSignOut}>Log Out</button>
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
}
