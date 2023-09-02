import profile from "../../assets/images/background.png"

export default function CartItem({}){
    return(
        <div className="w-full border border-1 rounded-xl p-2 px-1 my-4">
            <ul className="flex items-center justify-between ">
                <li>
                    <div className="h-16 w-16 rounded-full bg-cover bg-center" style={{'backgroundImage': `url(${profile})`}}>
                    </div>
                </li>
                <li>
                    <span className="text-md">اسم آرایشگر</span>
                </li>
                <li>
                    <span className="text-md">کوتاهی مو</span>
                </li>
                <li>
                    <span className="text-md">روز دوشنبه 1402/5/27</span>
                </li>
                <li>
                    <span className="text-md">از ساعت 6 الی 8</span>
                </li>
                
            </ul>
        </div>  
    )
}