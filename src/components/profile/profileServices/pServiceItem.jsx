import React from 'react'

export default function PServiceItem() {
  return (
    <div className="w-full border border-1 rounded-xl p-2 px-6 my-4">
    <ul className="flex items-center justify-between ">
        <li>
            <span className="text-md">کوتاهی مو</span>
        </li>
        <li className='flex items-center'>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">فعال</span>

                <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>

        </li>
        <li>
            <span className="text-md">شنبه الی چهارشنبه</span>
        </li>
        <li>
            <span className="text-md">16:00-18:00</span>
        </li>
        
    </ul>
</div>  
  )
}
