import { useState, useEffect} from "react";


export function SearchBar({handleSearch,handleSearchValue,movieName,page,activeTab}){
    
    const [inputBackground,setInputBackground] = useState("h-12 px-6 text-lg text-white bg-[#cf7035] hover:bg-[#e16844] hover:text-white hover:cursor-pointer rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50")
   
    useEffect(() => {
        if (activeTab === "tv") {
            setInputBackground("h-12 px-6 text-lg text-white bg-[#3ada9a] hover:bg-[#38bb79] hover:text-white hover:cursor-pointer rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50");
        } else {
            setInputBackground("h-12 px-6 text-lg text-white bg-[#cf7035] hover:bg-[#e16844] hover:text-white hover:cursor-pointer rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50");
        }
    }, [activeTab]);




    const handleSubmit = (e) =>{
        e.preventDefault();
        handleSearch(page);
    }

    return(
        <div className="w-full flex items-center justify-center">
  <form onSubmit={handleSubmit} className="flex items-center justify-center w-full max-w-md  bg-[#e3a036] rounded-lg shadow-lg p-4">
    <input 
      className="flex-1 h-12 text-lg px-4 rounded-l-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Enter movie name or keyword"
      value={movieName}
      onChange={handleSearchValue}
      autoComplete="off"
    />

    <button
    type="submit"
      className={inputBackground}
    >
      Search
    </button>
  </form> 
</div>

        
    )
}