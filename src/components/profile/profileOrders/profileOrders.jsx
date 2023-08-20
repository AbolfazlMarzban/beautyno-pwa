import Navbar from "../../Navbar"
import POrderItems from "./pOrderItems"

export default function ProfileOrders({}){
    return(
        <div className='flex flex-row h-full'>
     
        <div className='basis-5/6 flex flex-col items-center justify-center'>
            <div className="w-full">
            <h2 className="text-xl font-bold">سفارشات</h2>
              <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 justify-evenly">
                  <ul className="flex flex-wrap -mb-px">
                      <li className="mr-2">
                          <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">جاری</a>
                      </li>
                      <li className="mr-2">
                          <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">اخیر</a>
                      </li>
                      <li className="mr-2">
                          <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">کنسل شده ها</a>
                      </li>
                  </ul>
              </div>

            </div>
            <POrderItems />
         </div>   
          <div className='basis-1/6'>
            <Navbar />
          </div>
        </div>
    )
}