import React from 'react'
import GenresList from '../Constant/GenresList'
import { IoChevronForwardSharp } from 'react-icons/io5'

function GenereMovieList() {
  return (
    <div className='p-5 px-10 md:px-20'>
      {GenresList.genere.map(( item:any,index )=>index<=4&&(
         <div>
            <h2 className='text-[20px] font-bold'>{item.name}
               <span className='font-normal text-[16px] cursor-pointer text-gray-400
                  float-right flex
                  '>VIEW ALL <IoChevronForwardSharp className='ml-1' /> 
               </span>
            </h2>
         </div>
      ))}
    </div>
  )
}

export default GenereMovieList