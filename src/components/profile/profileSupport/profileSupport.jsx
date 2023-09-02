import Navbar from "../../navbar"
import SupportTickets from "./supportTickets"

export default function ProfileSupport({}){
    return (
        <div className='flex flex-col h-full justify-center'>
     
        <div className='w-full flex flex-col items-center justify-center'>
            <div>
            <h2 className="text-xl font-bold">پشتیبانی</h2>
            </div>
            <SupportTickets />
         </div>   
          <div className='w-full'>
            <Navbar />
          </div>
        </div>
    )
}