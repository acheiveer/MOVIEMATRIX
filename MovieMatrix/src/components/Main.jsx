import { useState } from 'react'
import '../App.css'
import axios from 'axios';
import { SearchBar } from './SearchBar';
import { Card } from './CardComponent';




export function Main(){
    const apiKey = import.meta.env.VITE_API_KEY;

    const [activeTab, setActiveTab] = useState('movie');
    const [movieName,setMoviename] = useState("");
    const [cardData,setCardData] = useState([]);
    const [nextPage,setNextPage] = useState(1);
    const [searchFor,setSearchfor] =  useState("movie")

    const fetchdata = async (finalSearchKeyword,page) => {
        try {
            const response = await axios.get(
            `https://api.themoviedb.org/3/search/${searchFor}?api_key=${apiKey}&language=en-US&query=${finalSearchKeyword}&page=${page}&include_adult=false`
            )
            console.log(response.data)
            setCardData(response.data.results);
            if(page>=response.data.total_pages) page=0;
            setNextPage(page+1)
        } catch (error) {
            console.error("Error fetching the move data " ,error)
        }
      
    }

    function handleSearchTabs(keyword){
        setActiveTab(keyword);
        setSearchfor(keyword);
    };
   
  
   
      
    const handleSearchValue = async (e) =>{
      setMoviename(e.target.value)
    }
  
    const handleSearch = async (page) =>{
      if(movieName){
        const finalSearchKeyword = movieName.split(/[ -,]/).join("+");
        fetchdata(finalSearchKeyword,page);
      }
      else{
        alert("Please enter any movie name in the search box");
      }


    }
  
    return (
     <div className='font-poppins absolute w-[70vw] min-h-[80vh] min-w-[250px] bg-[#ffffff] z-5 top-[80px] mx-[14%] rounded-[10px] shadow-custom p-0 flex flex-col justify-between items-center overflow-hidden'>   


    <div className='flex-[0.1] w-4/5 flex justify-around items-center mt-5'>
      <div
        className={`text-xl px-4 py-2 font-semibold text-[#cf7035] ${activeTab === 'movie' ? 'active border-b-2 border-[#cf7035]' : 'hover:bg-[#e16844] hover:text-white hover:cursor-pointer'}`}
        onClick={() => handleSearchTabs('movie')}>Movies
      </div>
      <div
        className={`text-xl px-4 py-2 font-semibold text-[#3ada9a] ${activeTab === 'tv' ? 'active border-b-2 border-[#3ada9a]' : 'hover:bg-[#38bb79] hover:text-white hover:cursor-pointer'}`}
        onClick={() => handleSearchTabs('tv')}>TV Shows
      </div>
    </div>

    <div className="flex-[0.9] mx-auto mt-15 w-4/5">
      <SearchBar handleSearch={handleSearch} handleSearchValue={handleSearchValue} movieName={movieName} page={nextPage} activeTab={activeTab}/>


      <Card cardData={cardData} searchFor={searchFor}/>
    </div>





      </div>
      
     
    )
}