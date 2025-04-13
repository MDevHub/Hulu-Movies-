import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function Hero() {

   const [movieList, setMovieList]=useState([])
   useEffect(()=> {
      getPopularMovies();
   }, [])

   const getPopularMovies = ()=>{
      GlobalApi.getPopularMovies.then((resp:any)=>{
         const result = resp.data.results;
         setMovieList(result)
         console.log(result);
      })
   }

   return (
      <div>
         Hero
      </div>
   )
}

export default Hero