import Navbar from "../../Navbar"
import SupportTickets from "./supportTickets"

export default function ProfileSupport({}){
    return (
        <div className='flex flex-row h-full'>
     
        <div className='basis-5/6 flex flex-col items-center justify-center'>
            <div>
            <h2 className="text-xl font-bold">پشتیبانی</h2>
            </div>
            <SupportTickets />
         </div>   
          <div className='basis-1/6'>
            <Navbar />
          </div>
        </div>
    )
}