import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function Hero() {

   const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
   const [movieList, setMovieList]=useState<any>([])
   useEffect(()=> {
      getPopularMovies();
   }, [])

   const getPopularMovies = ()=>{
      GlobalApi.getPopularMovies.then((resp:any)=>{
         const result = resp.data.results;
         setMovieList(result[4])
      })
   }

   return (
      <div>
          <div className='absolute h-[85vh] bg-gradient-to-t   from-[#1e2126]
            via-transparent to-transparent w-full'></div>
         <div className='absolute mt-[250px] md:mt-[300px] px-10 md:px-24'>
            <h2 className='text-[19px] lg:text-[27px]'>Watch only on HULU</h2>
            <h2 className='text-[36px] lg:text-[47px] font-extrabold'>{movieList.original_title}</h2>
            <div className='flex gap-5 mt-5'>
               <button className='bg-white text-black rounded-sm'>PLAY</button>
               <button className='bg-transparent border-2 border-white
                  cursor-pointer rounded-sm hover:border-gray-500 '>
                  DETAILS
               </button>
            </div>
         </div>
         <img src={IMAGE_BASE_URL+movieList.backdrop_path}
         width={1920} height={1080}
         className='h-[85vh] object-cover'/>
      </div>
   )
}

export default Hero