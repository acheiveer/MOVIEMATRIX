export function SortingOptions({sortResults,searchFor}){
    let optionColor = {
        color:"#cf7035"
    }
    if(searchFor==="tv"){
        optionColor.color = "#3ada9a"
    }
    return(
        <div className="flex flex-[0.8] flex-row items-center justify-evenly">
        <select onChange={(e)=>{
            if(e.target.value==="none") return null;
            let[option,order] = e.target.value.split(",");
            sortResults(option,order);
        }} className="w-[110%] h-[6vh] text-[18px] border-2 border-[#2d4059] bg-white" style={optionColor}>
        <option className="text-[14px] font-semibold m-[5px_10px] border-none outline-none " value="none">None</option>
        <option className="text-[14px] font-semibold m-[5px_10px] border-none outline-none " value={["rating","i"]}>Rating Increasing</option>
        <option className="text-[14px] font-semibold m-[5px_10px] border-none outline-none " value={["rating","d"]}>Rating Decreasing</option>
        <option className="text-[14px] font-semibold m-[5px_10px] border-none outline-none " value={["date","i"]}>Date Increasing</option>
        <option className="text-[14px] font-semibold m-[5px_10px] border-none outline-none " value={["date","d"]}>Date Decreasing</option>
        <option className="text-[14px] font-semibold m-[5px_10px] border-none outline-none " value={["alphabet","i"]}>Alphabetically Increasing</option>
        <option className="text-[14px] font-semibold m-[5px_10px] border-none outline-none " value={["alphabet","d"]}>Alphabetically Decreasing</option>
            
        </select>

        </div>
    )
}