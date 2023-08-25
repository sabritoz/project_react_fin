import React, { useState } from 'react'

export const ShoppingCard = ({el}) => {
  const [showingness, setshowingness] = useState(true)
  return (
    <div className='card cardt' id={showingness?'':'none'}>
        <img src={el.image}/>
        <h1>{el.name}</h1>
        <button onClick={()=>setshowingness(false)}>X</button>
    </div>
  )
}
