import { useState } from 'react'
import axios from 'axios';
import './App.css'


function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [movieName,setMoviename] = useState('');
  const [searchResult,setSearchResult] = useState(null);
  const [error,setError] = useState(null);
 

 
    const fetchdata = async (movieName) =>{
        try {
          const response = await axios.get(
            `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`
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
       {searchResult && !error && (
        <div>
        <h2>Search Results</h2>
          {searchResult.Search.map((item)=>{
           return (
            <div key={item.imdbID}  className="movie-item">
            <p>Movie Name: {item.Title} </p>
            <p>Year: {item.Year} </p>
            <img src={item.Poster}  />
            </div>
           )
          })}
        </div>
       )}
    </div>
    
     
    </>
  )
}

export default App
{/* <h2>Search Results</h2>
            {searchResult.Search.map((item) => (
              <div key={item.imdbID} className="movie-item">
                <p>Movie Name: {item.Title}</p>
                <p>Year: {item.Year}</p>
                <img src={item.Poster} alt={`${item.Title} poster`} />
              </div>
            ))} */}
