import React from 'react'
import Navbar from '../Navbar'
import ListGalleryItem from './listGalleryItem'


export default function UserListGallery() {
  return (
    <div className='flex flex-row h-full'>
    <div className='basis-5/6 flex flex-col items-center'>
        <ListGalleryItem />
     </div>   
      <div className='basis-1/6'>
        <Navbar />
      </div>
    </div>
  )
}
