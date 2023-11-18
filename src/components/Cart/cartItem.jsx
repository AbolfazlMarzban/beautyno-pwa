import profile from "../../assets/images/background.png"

export default function CartItem({}){
    return(
        <div className="w-full border border-1 rounded-xl p-2  my-4">
            <ul className="flex items-center justify-between ">
                <li>
                    <div className="h-16 w-16 rounded-full bg-cover bg-center" style={{'backgroundImage': `url(${profile})`}}>
                    </div>
                </li>
                <li>
                    <span className="text-md">UserName</span>
                </li>
                <li>
                    <span className="text-md">Service Name</span>
                </li>
                <li>
                    <span className="text-md">Service Date</span>
                </li>
                <li>
                    <span className="text-md">Service Time</span>
                </li>
                
            </ul>
        </div>  
    )
}