import ItemList from "./item-list"
export default function Page() {
    return (
        <main className="bg-slate-100 p-6 w-1/4 m-3">
            <h1 className="bg-cyan-200 text-cyan-950 text-3xl p-4 w-1/1.5 m-2">Shopping list:</h1>
            <ItemList></ItemList>
        </main>
    );
}
