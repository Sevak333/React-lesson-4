import { useContext } from "react"
import { BookContext } from "../Context"

export const BasketItem = ({ id, title, price, count }) => {

    const { addCount, removeCount, removeFromCart } = useContext(BookContext)

    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>{count? count: 0}</td>
            <td>{count? count * price : 0}</td>
            <td>
                <button onClick={() => addCount(id)}>+</button>
                <button onClick={() => removeCount(id)}>-</button>
                <button onClick={() => removeFromCart(id)}>x</button>
            </td>
        </tr>
    )
} 