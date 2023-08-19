import Navbar from "../Navbar"
import CartItems from "./cartItems"

export default function Cart({}){
    return(
        <div className='flex flex-row h-full'>
     
        <div className='basis-5/6 flex flex-col items-center justify-center'>
            <div>
            <h2 className="text-xl font-bold">سبد خرید</h2>
            </div>
            <CartItems/>
         </div>   
          <div className='basis-1/6'>
            <Navbar />
          </div>
        </div>
    )
}