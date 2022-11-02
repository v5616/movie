import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Movie from './movie/Movie';

function Home() {
    const api =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=10e784bf2808e363f5cc8d92fe6d8000";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(api).then((res)=>res.json()).then((data)=>{setMovies(data.results)})
  
    
  }, [])
  
  return (
    <>
   <Movie/>
    </>
  )
}

export default Home