import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomeServices from './components/home/HomeServices';

function App() {
  return (
    <div className="App h-screen">
        <div className='flex flex-row h-full'>
        <div className='basis-5/6'>
          <HomeServices /> 
          </div>
          <div className='basis-1/6'>
            <Navbar />
          </div>
   
        </div>
    </div>
  );
}

export default App;
