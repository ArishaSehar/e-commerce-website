import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// ✅ Import your page components
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx'
import LoginSignup from './pages/LoginSignup.jsx';
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner}category="kids" />} />
          
          {/* ✅ Dynamic product route */} 
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
