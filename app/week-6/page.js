"use client";

import ItemList from "./item-list"
export default function Page() {
    return (
        <div className="flex justify-center items-center">
            <main className="bg-slate-100 p-6 w-1/4 m-3 rounded-2xl">
                <h1 className="bg-cyan-200 text-cyan-950 text-4xl p-4 w-1/1.5 m-2 rounded-2xl">Shopping list</h1>
                <ItemList />
            </main>
        </div>
    );
}
