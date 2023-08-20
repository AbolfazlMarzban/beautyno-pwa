import React from 'react'
import Navbar from '../../Navbar'
import PServiceItems from './pServiceItems'

export default function ProfileServices() {
  return (
    <div className='flex flex-row h-full'>
     
    <div className='basis-5/6 flex flex-col items-center justify-center'>
        <div>
        <h2 className="text-xl font-bold">خدمات شما</h2>
        </div>
        <PServiceItems />
     </div>   
      <div className='basis-1/6'>
        <Navbar />
      </div>
    </div>  )
}
