import React from 'react'
import { useSelector } from 'react-redux'
import { ShoppingCard } from './ShoppingCard'

const Shopping = () => {
    let array=useSelector(state=>state.counter.value)
  return (
    <div className='List'>
      {array.map(el=><ShoppingCard el={el} />)}
    </div>
  )
}

export default Shopping