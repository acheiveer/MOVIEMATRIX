 import { Main } from "./Main"
 
 export function HomeView(){
    return (
        <div className="p-0 bg-[#e3a036] m-0 w-screen h-screen relative">
        <div className='font-lora h-[15vh] w-full mx-auto relative pt-[10px] bg-[#e3a036] flex items-start justify-center text-[#110b04]'>
         <span className='text-2xl font-semibold mx-10'>Movie Matrix</span>
         <div className="w-[12vh] h-[10vh] object-contain absolute top-[12px] left-[5px]"><img src="https://t4.ftcdn.net/jpg/06/99/77/83/240_F_699778378_hxlu1YGW6iv7luPpLf5v3E8Lbi6WMtnz.jpg" /> </div>
        </div>
          <Main/>
       </div>
    )
 }