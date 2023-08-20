import React from 'react'
import profile from "../../../assets/images/background.png"

export default function POrderItem() {
  return (
    <div className="w-full border border-1 rounded-xl p-2 px-6 my-4">
    <ul className="flex items-center justify-between ">
        <li>
            <div className="h-16 w-16 rounded-full bg-cover bg-center" style={{'backgroundImage': `url(${profile})`}}>
            </div>
        </li>
        <li>
            <span className="text-lg">اسم آرایشگر</span>
        </li>
        <li>
            <span className="text-lg">کوتاهی مو</span>
        </li>
        <li>
            <span className="text-lg">روز دوشنبه 1402/5/27</span>
        </li>
        <li>
            <span className="text-lg">از ساعت 6 الی 8</span>
        </li>
        
    </ul>
</div>  
    )
}
