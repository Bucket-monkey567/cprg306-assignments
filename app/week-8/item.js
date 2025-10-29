"use client";

export default function Item({name, quantity, category}) {
    function handleClick() {
        onselect({name, quantity, category});
    }

    return (
        <section>
            <li className="to-blue-300 p-2 m-2 bg-gray-400 rounded-2xl">
                <p className="font-bold">{name}</p>
                <p>Buy {quantity} in {category}</p>
            </li>
        </section>
    )
}
