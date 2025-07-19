import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from '../CSS/Item.module.css'
import { Context } from './CartContext';
function Item() {

    const { addToCart } = useContext(Context)
    const { id } = useParams();
    const [item, setItem] = useState({})
    const request = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            setItem(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        request();
    }, [id])
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <div className={styles.buttons}>
                    <button onClick={()=>addToCart(item)}>Add to Cart</button>
                    <button>Buy</button>
                </div>
                {item.images?.[0] && <img src={item.images[0]} alt={item.title} />}
            </div>
            <div className={styles.description}>

                <h3 className={styles.name}>{item.title}</h3>
                <span>by {item.brand}</span>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <span>{item.discountPercentage}% off</span>
                <br />

                <span>{item.availabilityStatus}</span>
                <p>{item.returnPolicy}</p>
                <p>{item.warrantyInformation}</p>

                <h3 className={styles.name}>Customers Reviews</h3>
                <div className={styles.review}>
                    {item.reviews?.map((review) => (
                        <>
                            <div className={styles.logo}><AccountCircleIcon />  {review.reviewerName}</div>
                            <p>{review.comment}</p>
                        </>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Item
