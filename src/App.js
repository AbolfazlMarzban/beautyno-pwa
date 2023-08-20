import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Cart from './components/Cart/cart';
import HomePage from './components/home/homePage';
import FavouritesPage from './components/favourites/favouritesPage';
import ProfilePage from './components/profile/profilePage';
import ProfileOrders from './components/profile/profileOrders/profileOrders';
import ProfileServices from './components/profile/profileServices/profileServices';

function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/Cart" element={ <Cart/> } />
        <Route path='/Favourites' element={<FavouritesPage />} />
        <Route path='/Profile' element={<ProfilePage />} />
        <Route path='/Profile/orders' element={<ProfileOrders />} />
        <Route path='/Profile/services' element={<ProfileServices />} />
      </Routes>
    </div>
  );
}

export default App;
