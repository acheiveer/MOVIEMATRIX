export function SortingOptions({sortResults,searchFor}){
    let optionColor = {
        color:"#cf7035"
    }
    if(searchFor==="tv"){
        optionColor.color = "#3ada9a"
    }
    return(
        <div className="options">
        <select onChange={(e)=>{
            if(e.target.value==="none") return null;
            let[option,order] = e.target.value.split(",");
            sortResults(option,order);
        }} className="options__select" style={optionColor}>
        <option value="none">None</option>
        <option value={["rating","i"]}>Rating Increasing</option>
        <option value={["rating","d"]}>Rating Decreasing</option>
        <option value={["date","i"]}>Date Increasing</option>
        <option value={["date","d"]}>Date Decreasing</option>
        <option value={["alphabet","i"]}>Alphabetically Increasing</option>
        <option value={["alphabet","d"]}>Alphabetically Decreasing</option>
            
        </select>

        </div>
    )
}