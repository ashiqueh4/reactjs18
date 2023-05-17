import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
     <Link to={'/'} className='logo_anchor'>
        <div className='logo'><h1>Project 18</h1></div> 
      </Link>
        </div>
  )
}

export default Header