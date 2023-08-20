import React from 'react'
import Navbar from '../Navbar'
import UserHead from './userHead'
import UserGallery from './userGallery'

export default function UserPage() {
  return (
    <div className='flex flex-row h-full'>
     
    <div className='basis-5/6 flex flex-col'>
        <UserHead />
        <hr></hr>
        <UserGallery />
     </div>   
      <div className='basis-1/6'>
        <Navbar />
      </div>
    </div>
  )
}
