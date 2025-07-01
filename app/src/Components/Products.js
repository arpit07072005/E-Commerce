import React, { useState } from 'react'
import Category from './Category'
import styles from '../CSS/Products.module.css'
function Products() {
  const [priceLow,setPriceLow]=useState(null);
  const [priceHigh,setPriceHigh]=useState(null);
  const [rating,SetRating]=useState(null);
  const handleChange=(lowprice,highPrice)=>{
    setPriceLow(prev =>prev===lowprice ? null: lowprice);
    setPriceHigh(prev =>prev===highPrice ? null: highPrice);
  }
  const handleClick = (rating)=>{
    SetRating(prev=>prev===rating? null : rating)
  }
  return (
    <div className={styles.container}>
        <div className={styles.filters}>
             <div className={styles.filterHead}>
                <h2>Filters</h2>
                <div className={styles.categoryHead}>Price Range</div>
                <div className={styles.checkbox}>
                  <label htmlFor="1">
                    <input type="radio" id='1' checked ={priceHigh===10} onClick={()=>handleChange(0,10)} readOnly />
                    0-10$
                  </label>
                  <label htmlFor="2">
                    <input type="radio" id='2' checked ={priceHigh==50} onClick={()=>handleChange(10,50)} readOnly />
                    10-50$
                  </label>
                  <label htmlFor="3">
                    <input type="radio" id='3' checked ={priceHigh==100} onClick={()=>handleChange(50,100)} readOnly />
                    50-100$
                  </label>
                   <label htmlFor="4">
                    <input type="radio" id='4' checked ={priceHigh==500} onClick={()=>handleChange(100,500)} readOnly />
                    100-500$
                  </label>
                    <label htmlFor="5">
                    <input type="radio" id='5' checked ={priceHigh>=501} onClick={()=>handleChange(501,5000)} readOnly />
                    Above 500$
                  </label>
               <div className={styles.categoryHead}>Rating</div>
               <div className={styles.ratingbox}>
                <div className={styles.ratingbutton}>
                  <button  onClick={()=>{handleClick(4)}}>4 Stars & up</button>
                </div>
                <div className={styles.ratingbutton}>
                  <button onClick={()=>{handleClick(3)}}>3 Stars & up</button>
                </div>
               </div>
               <div className={styles.ratingbox}>
                <div className={styles.ratingbutton}>
                  <button onClick={()=>{handleClick(2)}}>2 Stars & up</button>
                </div>
                <div className={styles.ratingbutton}>
                  <button onClick={()=>{handleClick(1)}}>1 Stars & up</button>
                </div>
               </div>
                </div>
            </div>
        </div>
        <div className={styles.products}>
            <div className={styles.productsHead}>
                <h2>All Products</h2>
            </div>
      <Category name="https://dummyjson.com/products?limit=0" lowPrice={priceLow} highPrice={priceHigh} Rating={rating}/>
        </div>
    </div>
  )
}

export default Products
