import { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList(genreId:any) {
   
   const elementRef = useRef(null);
   const [movieList, setMovieList]= useState <any> ([])

   useEffect (()=>{
      getMovieListByGenreId();
   },[])

   const slideRight = (element:any)=>{
      element.scrollLeft+=500;
   }
   const slideLeft = (element:any)=>{
      element.scrollLeft-=500;
   }
   const getMovieListByGenreId =()=>{
      GlobalApi.getMovieByGenreId(genreId.genreId).then((resp:any)=>{
         setMovieList(resp.data.results);      
      })
   }

  return (
      <div className='flex items-center'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} className='text-[40px] bg-black p-2 z-10 cursor-pointer mb-[120px] rounded-full hidden md:block' />
            <div id='slider' ref={elementRef} className='w-full overflow-scroll scroll-smooth overflow-x-auto
               whitespace-nowrap scrollbar-hide mb-16 ml-[-20px] mr-[-20px]'>
                  
               {movieList.map((item:any, index:any)=>index<7&&(
                  <MovieCard movie={item}/>
               
               ))}
            </div>
         <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} 
            className='text-[40px] bg-black p-2 z-10 cursor-pointer mb-[120px] rounded-full hidden md:block'/>
      </div>
  )
}

export default MovieList