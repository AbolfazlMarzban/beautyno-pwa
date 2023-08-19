import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Cart from './components/Cart/cart';
import HomePage from './components/home/homePage';

function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/Cart" element={ <Cart/> } />
      </Routes>
    </div>
  );
}

export default App;
