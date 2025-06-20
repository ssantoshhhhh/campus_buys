import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/lOGIN.JSX';
import About from './pages/about';
import Contact from './pages/contact';
import Product from './pages/product';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/orders';
import Navbar from './components/Navbar';
import Home from './pages/home'; // ✅ fixed here
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Collection from './pages/Collection';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} /> {/* ✅ fixed here */}
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
