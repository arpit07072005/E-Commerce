
import React, { useContext } from 'react'
import { Context } from './CartContext'
import styles from '../CSS/Cart.module.css'
export default function Cart() {
  const { items, removeFromCart } = useContext(Context);
  return (
    <div className={styles.container}>
      <h2>Your Shopping Bag</h2>
      {items.length === 0 ? (<p>Bag Is Empty</p>) : (items.map((item, index) => (
        <div key={index} className={styles.card}>

          <div className={styles.details}>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity || 1}</p>
            <div className={styles.buttons}>
              <button onClick={() => removeFromCart(item.id)}>remove</button>
              <button onClick={() => removeFromCart(item.id)}>Buy</button>
            </div>

          </div>
          <img src={item.images ? item.images[0] : ''}
            alt={item.title} width='15%' height='15%' />
        </div>

      )))}
    </div>
  )
}
