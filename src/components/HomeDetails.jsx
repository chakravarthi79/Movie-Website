import { useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom"

const HomeDetails = () => {

    const {id} = useParams();
    //console.log(id);
    
    const [movies,setMovies] = useState({});
    const [casts,setCast] = useState({});
    let imagePath = "https://image.tmdb.org/t/p/w185";

    const movie_detail_url =`https://api.themoviedb.org/3/movie/${id}?api_key=544d002aaebdc9417de3c7514a49024f&language=en-US`;
   
    
    //https://api.themoviedb.org/3/movie/533535?api_key=544d002aaebdc9417de3c7514a49024f
    const movie_cast_detail_url =`https://api.themoviedb.org/3/movie/${id}/credits?api_key=544d002aaebdc9417de3c7514a49024f`;
    //console.log(movie_cast_detail_url);

    useEffect(()=>{
        let getData = async()=>{
            try{
                    const movie_detail_response = await axios.get(movie_detail_url);
                    setMovies(movie_detail_response.data);
                    console.log(movie_detail_response);
                     
                    const movie_cast_response = await axios.get( movie_cast_detail_url);
                    setCast(movie_cast_response.data);
                   //console.log(movie_cast_response.data);
                    
            }catch(error){
                console.log(error.message);
                
            }
        };getData();
    },[id]);
    //console.log(cast);

    const {cast,crew} = casts;
  return (
    <>
   
        <h1 className="text-center">Movies Details</h1>
        <div className="container">
            <div className="row">
            <div className="col-md-8">
            <img
                        src={imagePath + movies.backdrop_path}
                        className="img-fluid w-100 h-70"
                      /> 
            </div>
            <div className="col-md-4">
                <h1>{movies.original_title}</h1>
                <p><b>Release Date :</b> {movies.release_date}</p>
                <p><b>Overview:</b> {movies.overview}</p>
                
            </div>
            </div>
            <div className="row">
                <h1>Cast</h1>
               {
                casts.cast?.map((c,id)=>(
                    <>
                        <div className="col-md-2 border border-dark m-2" key={id}>
                            
                                <img src={imagePath+ c.profile_path} alt={movies.original_title} 
                                className="mt-2"
                                />
                                <p className="fw-bold">{c.original_name}</p>
                                <p><b>character :</b> {c.character}</p>

                        </div>
                    </>
                   
                ))
               }
           
            </div>
            
        </div>
        
    </>
  )
}

export default HomeDetails
