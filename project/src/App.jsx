import { useEffect, useState } from 'react'
import './App.css'
import { Basket } from './components/Basket';
import { ProductContext } from './Context';
import { BookContext } from './Context';
import { Products } from './components/Products';
import axios from 'axios'


function App() {
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2006/books")
      .then(res => {
        setBooks(res.data)
      })
  }, [])


  const moveToCart = item => {
    const itemIndex = basket.findIndex(elm => elm.id === item.id);
    if (itemIndex === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      const updateBasket = basket.map((elm, index) =>
        index === itemIndex ? { ...elm, count: elm.count + 1 } : elm
      );
      setBasket(updateBasket);
    }
  }

  const removeFromCart = id => {
    setBasket(basket.filter(elm =>
      elm.id != id
    ))
  }

  const addCount = id => {
    const updateBasket = basket.map(elm =>
      elm.id === id ? { ...elm, count: elm.count + 1 } : elm
    );
    setBasket(updateBasket);
  }

  const removeCount = id => {
    const updateBasket = basket.map(elm =>
      elm.id === id ? { ...elm, count: elm.count - 1 } : elm
    );

    const filterBasket = updateBasket.filter(elm => elm.count >= 1);

    setBasket(filterBasket);
  }

  return (
    <>
      <div className='row'>
        <ProductContext.Provider value={{
          products : books,
          moveToCart:moveToCart,
        }}>
          <Products />
        </ProductContext.Provider>


        <BookContext.Provider
          value={{
            items: basket,
            addCount: addCount,
            removeCount: removeCount,
            removeFromCart: removeFromCart,
          }}>
          <Basket />
        </BookContext.Provider>
      </div>
    </>
  )
}


export default App
