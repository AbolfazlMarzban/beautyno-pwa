import React from "react";


export default function ServiceItems({}){
    return(
        <div className="mt-4">
        <ul className="flex gap-x-4 items-center font-bold border border-1 py-1 px-4 justify-between rounded-xl">
          <li>رنگ مو</li>
          <li>شنبه تا چهارشنبه</li>
          <li>از ساعت 9 الی 12</li>
          <li>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded-xl shadow flex gap-x-2">
              رزرو سریع
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    )
}