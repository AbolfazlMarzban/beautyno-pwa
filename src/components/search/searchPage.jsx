import React from 'react';
import Navbar from '../navbar';
import SearchBox from "./searchBox/searchBox";

export default function Search() {
    return (
        <div className='flex flex-col items-center h-full'>
        <div className="w-full max-w-3xl">
            <SearchBox />
          </div>
          <div className="w-full">
            <Navbar />  
          </div>
        </div>
    );
}

