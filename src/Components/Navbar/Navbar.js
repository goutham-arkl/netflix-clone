import React, { useState } from 'react'
import "./Navbar.css";

//change nav-bar color while scrolling


function  Navbar() {

  const [color,setColor] = useState(false)
const changeColor = ()=>{
    if(window.scrollY>40){
      setColor(true)
    }else{
      setColor(false)
    }
}

window.addEventListener('scroll',changeColor)

  return (
    <div className={color ? 'navbar navbar-bg' : 'navbar'} >
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Avatar" />
    </div>
    
  )
}

export default Navbar