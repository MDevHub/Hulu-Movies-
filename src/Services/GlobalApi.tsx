import axios from "axios";

const movieBaseURL = 'https://api.themoviedb.org/3/movie';
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=dc22c3c06d3bd543d80a04a985a39485';

const api_key='dc22c3c06d3bd543d80a04a985a39485'

const getPopularMovies = axios.get(movieBaseURL+'/popular?api_key='+api_key)
const getMovieByGenreId=(id:number)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)


export default {
   getPopularMovies,
   getMovieByGenreId
}