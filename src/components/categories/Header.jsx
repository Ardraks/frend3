import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
const Header = () => {
 const navigate=useNavigate();
 
 const savedata =(event)=>{
    event.preventDefault();
    navigate("/Login")
 }
  return (
    <div className='header'>
        <div className='headerTitles'>
        <span className='headerTitlesSm'>React&node</span>
            <span className='headerTitlesLg'>BLOG</span>
            <button className='blogButton' onClick={savedata} >Create Blog</button>
        </div>
       <img
       className='headerImg'
       src="data:image/jpeg;base64,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"
       alt=''/>
      
    </div>
  )
}

export default Header
