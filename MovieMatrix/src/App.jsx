import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'


function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [movieName,setMoviename] = useState('');
  const [searchResult,setSearchResult] = useState(null);
 

  useEffect(()=>{
    const fetchdata = async () =>{
      if(movieName){
        try {
          const response = await axios.get(
            `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`
          );
          console.log(response.data)
          setSearchResult(response.data);
        } catch (error) {
          console.error("Error fetching the move data " ,error)
          setSearchResult(null);
        }
      }
    }
    fetchdata();
  },[movieName])

  const handleInputChanges = async (e) =>{
    setMoviename(e.target.value)
  }

  const handleSearch = async (e) =>{
    e.preventDefault();
    
  }

  return (
    <>
    <div className='flex justify-center py-10'>
      <form onSubmit={handleSearch}>
      <input
       value={movieName}
       onChange={handleInputChanges}
       placeholder='Search for movies'
       className='border-solid border-2 border-indigo-600 py-2 px-4 rounded'/>

    <button
     type="submit"
     className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Search</button>
      </form>
    </div>

    <div className='card flex justify-center'>
       {searchResult && (
         <div>
         <h2>Search Result</h2>
          <p>Movie Name: {searchResult.Title}</p>
          <p>Year: {searchResult.Year}</p>
         <img src={searchResult.Poster}/>
         </div>
       )}
    </div>
    
     
    </>
  )
}

export default App
