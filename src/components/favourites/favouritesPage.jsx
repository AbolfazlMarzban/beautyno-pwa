import Navbar from "../navbar"
import FavItems from "./favItems"

export default function FavouritesPage({}){
    return(
        <div className='flex flex-col h-full justify-center'>
     
        <div className='flex flex-col items-center justify-center'>
            <div>
            <h2 className="text-xl font-bold">مورد علاقه ها</h2>
            </div>
            <FavItems />
         </div>   
         <div className="w-full">
            <Navbar />
          </div>
        </div>
    )
}