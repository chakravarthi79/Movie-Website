import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { theme } from "../context/ThemeContext";

const TopRated = () => {
  let [movies, setMovies] = useState([]);
  let [fmovies, fsetMovies] = useState([]);
  const [searchKey,setSearchKey] = useState("");
  const {isDarkModeEnabled,toggleItem} = useContext(theme);

  const baseUrl =
    "https://api.themoviedb.org/3/movie/top_rated";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDRkMDAyYWFlYmRjOTQxN2RlM2M3NTE0YTQ5MDI0ZiIsIm5iZiI6MTcyNjkwNjQ4OS4wODk2NjQsInN1YiI6IjY2YTM4NjJlMDg5NGNlNWEwMDA4ZjBmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sD5jQdKysOmgd2WsDSgFeoUC-EftwMFf4zFQAEFAs68",
    },
  };

  let imagePath = "https://image.tmdb.org/t/p/w185";
  useEffect(() => {
    let getData = async () => {
      try {
        let response = await axios.get(baseUrl, options);
        const { results } = response.data;
        console.log(results);
        setMovies(results);
        fsetMovies(results);
        // console.log(movies);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [baseUrl]);

  const handleChange = (e)=>{
    
    setSearchKey(e.target.value);

    const filteredMovies = fmovies.filter(movie=>{
      return movie.original_title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    
    
    setMovies(filteredMovies);
    //console.log(e.target.value);
    //console.log(searchKey);
    
  }

 
  return (
    <>

      <div className= {` ${isDarkModeEnabled?'bg-dark':'bg-white'}`}>
      <div className="col-md-4 ms-5">
        <form>
        <input type="text" name='searchKey' value={searchKey} placeholder='Enter search ' className='form-control'
        onChange={handleChange}
        />
      
        </form>
        </div>
      <h1 className={`text-center ${isDarkModeEnabled?'text-white':'text-dark'}`}>TopRated Movies</h1>
      <div className="container">
        <div className="row">
          {movies.map((movie,id) => {
            return (
              <div key={id} className="col-md-3 mt-3">
                <div className={`card shadow-lg  ${isDarkModeEnabled?'bg-dark border border-white':'bg-white border border-dark'}`}>
                    <div className={`card-body ${isDarkModeEnabled?'text-white':'text-dark'}`}>
                    <Link
                      to={`/moviedetails/${movie.id}`}>
                      
                    <img src={
              imagePath + movie.poster_path
            }  className="img-fluid w-100"/>
            </Link>
                        <h5 className="text-center my-4">{movie.original_title}</h5>
            
            <ul>
              <li>Release Date:  {movie.release_date}</li>
              <li>Votes Count : <i className="fa-solid fa-thumbs-up fs-4 text-primary"></i> {movie.vote_count}</li>

            </ul>
            
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
};

export default TopRated;

