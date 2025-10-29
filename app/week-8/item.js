"use client";

export default function Item({name, quantity, category, onSelect}) {
    function handleClick() {
        onSelect({name, quantity, category});
    }

    return (
        <section>
            <li onClick={handleClick} 
            className="to-blue-300 p-2 m-2 bg-gray-400 rounded-2xl cursor-pointer hover:bg-gray-200 hover:text-black">
                <p className="font-bold">{name}</p>
                <p>Buy {quantity} in {category}</p>
            </li>
        </section>
    )
}
