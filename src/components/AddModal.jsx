import React, { useState } from 'react'
import { addvalue } from './store/julerySlice';
import { useDispatch, useSelector } from 'react-redux';

const AddModal = ({setshowadd,setproduit,produit}) => {
   let array=useSelector(state=>state.counter.value)
   const dispatch=useDispatch()
  return (
    <div className='bigModal'>
      <div className='Modale'>
        <button onClick={()=>setshowadd(false)}>X</button>
        <h1>Purchase a Jewlery </h1>
        <div className='form'>
            <div className='el'>
            <h2>Name:</h2>
            <input type="text" placeholder='First given Name of the Customer' onChange={(e)=>setproduit({...produit,name:e.target.value})}/>
            </div>
            <div className='el'>
            <h2>genre:</h2>
            <input type="text" placeholder='bracelet/necklace/ring...' onChange={(e)=>setproduit({...produit,genre:e.target.value})}/>
            </div>
            <div className='el'>
            <h2>image:</h2>
            <input type="text" placeholder='image of the Jewlery'  onChange={(e)=>setproduit({...produit,image:e.target.value})}/>
            </div>
            <div className='el'>
            <h2>payment:</h2>
            <input type="text" placeholder='bank account or card ID number' onChange={(e)=>setproduit({...produit,description:e.target.value})}/>
            </div>
            <button className='addbtn btn' onClick={()=>{dispatch(addvalue(produit));setshowadd(false)}}>PURCHASE</button>
            
            
            
        </div>
   
        
      </div>
    </div>
  )
}

export default AddModal