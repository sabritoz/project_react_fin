import React from 'react'
import MoviesCard from './MovieCard'


const MovieList = ({Movies,search}) => {
  return (
    <div className='List'>
      {Movies
      .filter((el)=>el.name.toLowerCase().includes(search.toLowerCase()))
      .map(el=><MoviesCard el={el} />)}
    </div>
  )
}

export default MovieList