import React, { useState } from 'react'
import MovieModal from './MovieModal'

const MoviesCard = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='card'>
        {show?<MovieModal el={el} setshow={setshow}/>:null}
      <img src={el.image} onClick={()=>setshow(true)} />
      <h1>{el.name}</h1>
      
    </div>
  )
}

export default MoviesCard