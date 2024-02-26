import React from 'react';

function SearchBox() {
    return (
        <div className='flex justify-around p-4'>
            <div className='flex flex-col items-start gap-1'>
                <label htmlFor="">Username</label>
                <input type="text" className='border rounded-lg p-2' />
            </div>
            <div className='flex flex-col items-start gap-1'>
                <label htmlFor="">Service Name</label>
                <input type="text" className='border rounded-lg p-2' />
            </div>
            <div className='flex flex-col items-start gap-1'>
                <label htmlFor="">Service Day</label>
                <input type="text" className='border rounded-lg p-2' />
            </div>
            <div className='flex flex-col items-start gap-1'>
                <label htmlFor="">Service Time</label>
                <input type="text" className='border rounded-lg p-2' />
            </div>
        </div>
    );
}

export default SearchBox;