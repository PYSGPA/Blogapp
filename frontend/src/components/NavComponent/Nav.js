import './Nav.css';
// import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (

  <>
  
  <div class="header_section">
         <div class="container-fluid header_main">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a class="logo" ><img src="./assets/images/logo.png"/></a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                     <li class="nav-item">
                        <a className="nav-link" ><Link to="/" className='nav-a'> Home </Link> </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" ><Link to="/about " className='nav-a'> About </Link> </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link"><Link to="/blog" className='nav-a'> Blog </Link> </a>
                     </li>
                     
                     <li class="nav-item">
                        <a class="nav-link"><Link to="/contact" className='nav-a'> Contact Us </Link> </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link"><Link to="/login" className='nav-a'> Login </Link> </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link"><Link to="/register" className='nav-a'> Register </Link> </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link"><img src="./assets/images/serach-icon.png"/></a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
         </div>
   
  </>
  );
}

export default Nav;


