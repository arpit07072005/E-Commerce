
import './App.css';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './Components/Products.js';
import Item from './Components/Item.js';
import Cart from './Components/Cart.js';
import { CartProvider } from './Components/CartContext.js';
import { PaymentProvider } from './Components/PaymentContext.js';
function App() {
  return (
   <>
   <BrowserRouter>
   <CartProvider>
    <PaymentProvider>
    <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/item/:id' element={<Item/>}/>
    </Routes>
    </PaymentProvider>
   </CartProvider>
   </BrowserRouter>
   </>
  );
}

export default App;
