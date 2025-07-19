import { createContext, useState } from "react";

const Context = createContext()
//avoid usestate in app.js and  use function cartprovider
 export const CartProvider = ({children})=>{
   const [items,setItems]= useState([]);
   const addToCart=(newItem)=>{
     setItems((prevItems)=>{
        const exists = prevItems.find((item) => item.id === newItem.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...newItem, quantity: 1 }];
    });
   }
    const removeFromCart = (productId) => {
   setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }; 
 return (
    <Context.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </Context.Provider>
  );
};
export {Context};