import React, { useEffect, useState } from "react"; 
import AxiosInstance from "../../api/AxiosInstance"; 
import HomeCard from "./HomeCard";

export default function Home() {
  
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    AxiosInstance.get("movie/popular?language=en-US&page=1") 
      .then((response) => setPopularMovies(response.data.results)) 
      .catch((error) => console.error("Error fetching popular movies:", error));
  }, []);

  return <>
  <h2 className='text-center m-5' style={{color:'brown'}}>Popular Movies</h2>

  <HomeCard movies ={popularMovies} />
  </>
  
}



