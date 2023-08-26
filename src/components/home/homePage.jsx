import HomeServices from "./homeServices"
import Navbar from "../Navbar"

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