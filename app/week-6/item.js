export default function Item({name, quantity, category}) {
    return (
        <section>
            <li className="to-blue-300 p-2 m-1">
                <p className="font-bold">{name}</p>
                <p>Buy {quantity} in {category}</p>
            </li>
        </section>
    )
}
