import { SingleCard } from "./Card"
export function Card({cardData,searchFor}){
    return(
        <div>
            {cardData && cardData.map((value,index)=>{
               return <SingleCard key={index} value={value} searchFor={searchFor}/>
            })}
        </div>
    )
}