import { useContext } from "react"
import { ProductContext } from "../Context"


export const Product = (elm) => {
    const { moveToCart } = useContext(ProductContext)
    return (
        <div>
            <img src={elm.photo} alt="" />
            <p>{elm.title}</p>
            <strong>{elm.price}USD</strong>
            <br />
            <button onClick={() => moveToCart(elm)}>Move</button>
        </div>
    )
}

