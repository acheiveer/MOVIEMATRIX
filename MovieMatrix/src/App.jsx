import { useState } from 'react'
import axios from 'axios';
import './App.css'
import {MovieCard} from "./components/movieCard"


function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [movieName,setMoviename] = useState('');
  const [searchResult,setSearchResult] = useState(null);
  const [error,setError] = useState(null);
 

 
    const fetchdata = async (movieName) =>{
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
          );
          setSearchResult(response.data);
          console.log(searchResult)
          setError(null)
        } catch (error) {
          console.error("Error fetching the move data " ,error)
          setError('Error fetching the movie data');
          setSearchResult(null);
        }
      };
    
   


  const handleInputChanges = async (e) =>{
    setMoviename(e.target.value)
  }

  const handleSearch = async (e) =>{
    e.preventDefault();
    if(movieName){
      fetchdata(movieName);
    }
    
  }

  return (
    <>
    <div className='flex justify-center py-10 bg-gradient-to-br from-purple-500 to-pink-500'>   
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

   
    <MovieCard searchResult={searchResult} error={error}></MovieCard>
    </>
  )
}

export default App
