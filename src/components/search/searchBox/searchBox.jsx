import React from 'react';

function SearchBox() {
    return (
        <div className='flex gap-3 p-4'>
            <div className='flex flex-col items-start gap-1'>
                <label htmlFor="">Username</label>
                <input type="text" className='border rounded-lg p-2' />
            </div>
        </div>
    );
}

export default SearchBox;