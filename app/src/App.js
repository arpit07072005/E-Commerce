
import './App.css';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './Components/Products.js';
import Item from './Components/Item.js';
function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
   <Route path='/item/:id' element={<Item/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
