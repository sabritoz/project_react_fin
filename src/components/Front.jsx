import React from 'react'
import { useNavigate } from 'react-router-dom'
import movy from './img/R.jpeg'
const Front = () => {
    const navigate= useNavigate()
  return (
    <div className='front'>
        <div>
            <h1>Jewlery Shop</h1>
            <h2>Purchase Jewlery Online</h2>
            <p>Are you a fan of Jewlery,well it's your lucky day! we have everything you need inorder to feel pretty</p>
            <button className='btn' onClick={()=>navigate('/home')}>See More</button>
            <h1>New client?what are you waiting for,become a VIP customer!</h1>
            <button className='btn' onClick={()=>navigate('/home')}>Sign up</button>
        </div>
        <img src={movy} alt="" /> 
        
        
    </div>
  )
}

export default Front