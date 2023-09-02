import Navbar from "../navbar"
import HomeServices from './homeServices'
export default function HomePage({}){
    return(
        <div className='flex flex-col h-full'>
        <div className="w-full">
          <HomeServices /> 
          </div>
          <div className="w-full">
            <Navbar />
          </div>
        </div>
    )
}