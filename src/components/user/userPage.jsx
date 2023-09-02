import React from 'react'
import Navbar from '../navbar'
import UserHead from './userHead'
import UserGallery from './userGallery'

export default function UserPage() {
  return (
    <div className='flex flex-col h-full'>
     
    <div className='w-full flex flex-col'>
        <UserHead />
        <hr></hr>
        <UserGallery />
     </div>   
      <div className='w-full'>
        <Navbar />
      </div>
    </div>
  )
}
