import { useState } from 'react'
import "./Navbar.css"

function Navbar(){
return(
    <>
   <div className='navbar-wapper'>
    <div className='navbar-container'>
        <span>Foodieland</span>
        {/* <div className='navabr-list'> */}
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Recipes">Recipes</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/form">Form</a></li>
            </ul>
        {/* </div> */}
    </div>
   </div>
    </>
)
} 

export default Navbar;