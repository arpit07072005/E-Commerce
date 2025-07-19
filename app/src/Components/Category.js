import React, { useEffect, useState } from 'react'
import styles from '../CSS/Category.module.css'
import axios from 'axios'
import StarRateIcon from '@mui/icons-material/StarRate';
import { Link } from 'react-router-dom';
function Category({name,highPrice=null,lowPrice=null,Rating=null}) {
  const [data,setData]=useState([])
  const request = async ()=>{
try{
  const response = await axios.get(name)
setData(response.data.products);
}catch(e){
console.log(e)
}
  }
  useEffect(()=>{
    request();
  },[]);
  return (
    <div className={styles.container}>
      {data.filter(item=> {
        if(highPrice!==null && lowPrice!==null){
          return item.price>= lowPrice && item.price<=highPrice
        }
        return true;
      })
      .filter((item)=>{
        if(Rating!==null){
          return item.rating>=Rating
        }
        return true;
      })
      .map((item)=>(
        <div key={item.id} className={styles.cart}>
<Link to={`/item/${item.id}`} style={{textDecoration: 'none',color: "#333333"}}>
        <div className={styles.image}> 
          <img src={item.images ? item.images[0] : ''}
            alt={item.title}  />
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>{item.title}</h3>
          <p className={styles.info}><b>Discription:</b>{item.description.slice(0,70)}...</p>
          <span className={styles.price}>${item.price}</span><span className={styles.rating}><StarRateIcon/>{item.rating}</span>
        </div>
        </Link>
      </div>
  ))}
    </div>
  )
}

export default Category
