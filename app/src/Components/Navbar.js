import React from 'react'
import styles from '../CSS/Navbar.module.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className={styles.container}>
<div className={styles.logo}>Arpit Pandey</div>
<div className={styles.list}>
    <li> <Link to='/'>Home</Link></li>
    <li><Link to='/'>Category</Link></li>
    <li><Link to='/products'>Products</Link></li>
</div>
<div className={styles.search}>
    <input type="text"  placeholder="Search products" className={styles.input} />
</div>
<div className={styles.right}>
    <div className="login">Login</div>
    <div className="cart"><Link to='/cart'>Cart</Link></div>
</div>
    </div>
  )
}

export default Navbar
