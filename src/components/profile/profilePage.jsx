import Navbar from "../Navbar"
import { Link } from "react-router-dom"

export default function ProfilePage({}){
    return(
        <div className='flex flex-row h-full'>
        <div className='basis-5/6 flex justify-center items-center'>
            <div className="w-1/2 flex flex-col">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2">
            تکمیل پروفایل
          </button>
          <Link to="/profile/orders" className="w-full">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2 w-full">
            سفارشات(برای مشتری)
          </button>
          </Link>
          
          <Link to="/profile/services" className="w-full">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2 w-full">
                خدمات(برای سرویس دهنده)
              </button>
          </Link>
 
          <Link to="/profile/support" className="w-full">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2 w-full">
            پشتیبانی
          </button>
          </Link>

          <button className="bg-red-600 hover:bg-red-300 text-white font-semibold p-4 border border-gray-400 rounded-xl shadow text-center my-2">
            خروج
          </button>
            </div>
          </div>
          <div className='basis-1/6'>
            <Navbar />
          </div>
        </div>
    )
}