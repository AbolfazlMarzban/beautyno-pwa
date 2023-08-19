import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Cart from './components/Cart/cart';
import HomePage from './components/home/homePage';
import FavouritesPage from './components/favourites/favouritesPage';

function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/Cart" element={ <Cart/> } />
        <Route path='/Favourites' element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
