import { useContext } from 'react';
import { ProductContext } from "../Context"
import { Product }  from "./Product"


export const Products = () => {
    const { products } = useContext(ProductContext)
    return (
        <div>
            <h3>Products</h3>
            <div className="list">
                {
                    products.map(product => <Product key={product.id} {...product} />
                    )
                }
            </div>
        </div>
    )
}

