import Navbar from "../../Navbar"

export default function ProfileOrders({}){
    return(
        <div className='flex flex-row h-full'>
     
        <div className='basis-5/6 flex flex-col items-center justify-center'>
            <div>
            <h2 className="text-xl font-bold">سفارشات</h2>
            </div>
            {/* <FavItems /> */}
         </div>   
          <div className='basis-1/6'>
            <Navbar />
          </div>
        </div>
    )
}