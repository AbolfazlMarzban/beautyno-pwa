import HomeServices from "./homeServices"
import Navbar from "../Navbar"

export default function HomePage({}){
    return(
        <div className='flex flex-row h-full'>
        <div className='basis-5/6'>
          <HomeServices /> 
          </div>
          <div className='basis-1/6'>
            <Navbar />
          </div>
        </div>
    )
}