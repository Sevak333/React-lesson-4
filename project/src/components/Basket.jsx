import { useContext } from 'react';
import { BasketItem } from './BasketItem';
import { BookContext } from '../Context';

export const Basket = () => {

    const { items } = useContext(BookContext)

    return (
        <div>
            <h3>Basket</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtitle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {items.map(item => <BasketItem key={item.id} {...item} />)}

                </tbody>
            </table>
        </div>
    )
}