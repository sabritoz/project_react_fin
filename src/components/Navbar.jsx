import React, { useState } from 'react'
import AddModal from './AddModal'
import Logo from "./img/diamond.jpg";
const Navbar = ({setsearch,setnavigation}) => {
    const [showadd, setshowadd] = useState(false)
    const [produit, setproduit] = useState({
      name:'',
      genre:'',
      Price:'',
      image:'',
      description:'',
    })
  return (
    <div className='navbare'>
      <nav>
       <img src={Logo} />
        <h1>My Jewels</h1>
        <a href="#home" onClick={()=>setnavigation(0)}>home</a>
        <a href="#services" onClick={()=>setnavigation(1)}>shopping cart</a>
        <a href="#gallery">gallery</a>
        <a href="#contact">contact</a>
        <div className='sth'>
            <input type="text" placeholder='search' onChange={(e)=>setsearch(e.target.value)} />
            <button className='btn' onClick={()=>setshowadd(true)}>Purchase</button>
            {showadd?<AddModal produit={produit} setproduit={setproduit} setshowadd={setshowadd}/>:null}
        </div>
      </nav>
    </div>
  )
}

export default Navbar