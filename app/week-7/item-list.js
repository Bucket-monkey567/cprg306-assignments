import { useState } from "react";
import Item from "./item";

export default function ItemList({items}) {
    const [sortBy, setSortBy] = useState("name");

    // let itemsCopy = [...items];

    if (sortBy === 'name') {
        items.sort((a,b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
        items.sort((a,b) => a.category.localeCompare(b.category));
    }

    return (
        <section className="p-3 text-blue-950 bg-gray-500 rounded-2xl">
            <div className="flex gap-4 mb-4">
                <button onClick={() => setSortBy("name")}
                className={`p-2 rounded ${ sortBy === 'name' ? 'bg-blue-400 text-white' : 'bg-gray-300 text-blue-950'}`}>
                    Sort by Name
                </button>

                <button onClick={() => setSortBy("category")}
                className={`p-2 rounded ${ sortBy === 'category' ? 'bg-blue-400 text-white' : 'bg-gray-300 text-blue-950'}`}>
                    Sort by Category
                </button>
            </div>
            <ul>
                {items.map((item) => (
                    <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category} />
                ))}
            </ul>
        </section>
    );
}
