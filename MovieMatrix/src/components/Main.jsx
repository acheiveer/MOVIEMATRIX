import { useState } from 'react'
import '../App.css'
import axios from 'axios';
import { SearchBar } from './SearchBar';
import { Card } from './CardComponent';
import { SortingOptions } from './SortingOptions';
import Sort from './Sorting';




export function Main() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [activeTab, setActiveTab] = useState('movie');
  const [movieName, setMoviename] = useState("");
  const [cardData, setCardData] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [searchFor, setSearchfor] = useState("movie")

  const fetchdata = async (finalSearchKeyword, page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/${searchFor}?api_key=${apiKey}&language=en-US&query=${finalSearchKeyword}&page=${page}&include_adult=false`
      )
      setCardData(response.data.results);
      if (page >= response.data.total_pages) page = 0;
      setNextPage(page + 1)
    } catch (error) {
      console.error("Error fetching the movie data ", error)
    }

  }

  function handleSearchTabs(keyword) {
    setActiveTab(keyword);
    setSearchfor(keyword);
  };

  const handleSearchValue = async (e) => {
    setMoviename(e.target.value)
  }

  const handleSearch = async (page) => {
    if (movieName) {
      const finalSearchKeyword = movieName.split(/[ -,]/).join("+");
      fetchdata(finalSearchKeyword, page);
    }
    else {
      alert("Please enter any movie name in the search box");
    }
  }

  function addDates(){
    if(cardData &&(!cardData[0].date)){
        for(let i=0;i<cardData.length;i++){
            let dateVal;
            if(cardData[i].release_date){
                dateVal = cardData[i].release_date.split("-").join(",");
            }
            else if(cardData[i].first_air_date){
                dateVal = cardData[i].first_air_date.split("-").join(",");
            }
            cardData[i].date = new Date(dateVal);
        }
    }
    else {
        return;
    }
}

  function sortResults(option,order=i){
    if(cardData){
      if(option==="rating"){
        sortRating(order);
      }
      else if(option==="date"){
        sortDate(order);
      }
      else if(option==="alphabet"){
        sortAlphabetically(order);
      }
    }
    else{
      return;
    }
  }

  function sortRating(order){
    setCardData(Sort.mergeSort(cardData,"vote_average",order));
  }

  function sortDate(order){
    addDates();
    setCardData(Sort.mergeSort(cardData,"date",order));
  }

  function sortAlphabetically(order){
    if(cardData[0].title)
      setCardData(Sort.mergeSort(cardData,"title",order))
      else
      setCardData(Sort.mergeSort(cardData,"name",order))
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
        <SearchBar handleSearch={handleSearch} handleSearchValue={handleSearchValue} movieName={movieName} page={nextPage} activeTab={activeTab} />


        {cardData.length > 0 && (
          <div className='flex w-[50%] h-[7vh] m-[5px] mx-auto justify-center' >
          <div className='flex-[0.2] text-[#cf7035] font-semibold text-center hover:cursor-auto hover:bg-white hover:text-[#cf7035]'><p>Sort by</p></div>
          <SortingOptions sortResults={sortResults} searchFor={searchFor}/>
          </div>
        )}

        <Card cardData={cardData} searchFor={searchFor} />
        {cardData.length > 0 && (
          <div
            className="w-40 md:w-1/2 mx-auto my-10 md:my-25 text-center text-lg text-white bg-orange-500 p-2 md:p-5 font-semibold rounded-lg cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
              handleSearch(nextPage);
            }}
          >
            <span>Next Page</span>
          </div>
        )}


      </div>

    </div>


  )
}