export default function Item({props}) {
    const {name, quantity, category} = props
    return (
        <section>
            <li className="to-blue-300 p-2 m-1">
                <p>Name: {name}</p>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </li>
        </section>
    )
}
