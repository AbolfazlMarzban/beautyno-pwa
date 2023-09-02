import Navbar from "../navbar"
import CartItems from "./cartItems"

export default function Cart({}){
    return(
        <div className='flex flex-col w-full h-full justify-center'>
     
        <div className='w-full flex flex-col items-center justify-center'>
            <div>
            <h2 className="text-xl font-bold">سبد خرید</h2>
            </div>
            <CartItems/>
         </div>   
          <div className='w-full'>
            <Navbar />
          </div>
        </div>
    )
}