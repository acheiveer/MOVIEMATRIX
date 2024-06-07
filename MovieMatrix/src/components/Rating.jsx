// const [movieName,setMoviename] = useState('');
// const [searchResult,setSearchResult] = useState(null);
// const [error,setError] = useState(null);



//   const fetchdata = async (movieName) =>{
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}&include_adult=false&language=en-US&page=1`
//         );
//         setSearchResult(response.data);
//         console.log(searchResult)
//         setError(null)
//       } catch (error) {
//         console.error("Error fetching the move data " ,error)
//         setError('Error fetching the movie data');
//         setSearchResult(null);
//       }
//     };
  
// const handleInputChanges = async (e) =>{
//   setMoviename(e.target.value)
// }

// const handleSearch = async (e) =>{
//   e.preventDefault();
//   if(movieName){
//     fetchdata(movieName);
//   }

