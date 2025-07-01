import React from 'react'
import styles from '../CSS/Home.module.css'
import Category from './Category'
function Home() {
  return (
    <div className={styles.main}>
     <div className={styles.image}>
      <img src="/home.png" alt="" />
     </div>
     <Category name='https://dummyjson.com/products/category/mens-shirts' />
     <Category name='https://dummyjson.com/products/category/mens-shoes' />
     <Category name='https://dummyjson.com/products/category/womens-bags' />
     <Category name='https://dummyjson.com/products/category/mens-watches' />

    </div>
  )
}

export default Home
