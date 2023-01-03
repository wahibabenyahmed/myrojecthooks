import React , {useState} from 'react'
import AddMovie from './AddMovie'
import MovieCard  from './MovieCard'
import {films} from './data'
import './style.css'
const MovieList = () => {



let [movie,setMovie]=useState(films)

let [search,setSearch] = useState()

const handelAdd=(newMovie)=>{

setMovie ([...movie,newMovie])
  }

  const handelSearch = ()=>{

    let res = movie.filter(el=> el.title === search);
    setMovie(res)
 
  }

  console.log(movie);
   return (
    
    <div >
      
      <div className='fond2'>
   {movie.map(el=>{ return <MovieCard element={el}/>  } )} 

   {(movie.length === 0)? <h1> No movie found here</h1>
  : null
 }
 </div>
 <div >
      Search:< input type='search' onChange={(event)=>setSearch(event.target.value)}/>
      <button  onClick={handelSearch}> search</button>
      </div>
      <div>
      <AddMovie handelAdd={handelAdd} />
      </div>
</div>

 )}
  

export default MovieList