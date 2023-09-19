import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import ProductDetail from './Component/ProductDetail';
import Cart from './Component/Cart';
import {Routes,Route} from 'react-router-dom'
import Checkout from './Component/Checkout';

function App() {
  return (
   <>
   <Header/>
   <Routes>
   <Route exact path="*" element={<Home />} />
   <Route exact path="/products" element={<Product />} />
   <Route exact path="/product/:id" element={<ProductDetail />} />
   <Route exact path="/cart" element={<Cart/>} />
   <Route exact path="/checkout" element={<Checkout/>} />
   <Route exact path="/about" element={<About />} />
   <Route exact path="/contact" element={<Contact />} />
   
   </Routes>
  
   </>
  );
}

export default App;
