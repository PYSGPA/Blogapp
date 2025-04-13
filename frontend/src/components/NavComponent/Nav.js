import './Nav.css';
// import React from 'react';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../AuthComponent/Auth';
function Nav() {
   const navigate = useNavigate();
   const [NavContent, setNavContent] = useState();
   const handleSelect = (e) => {
      const value = e.target.value;
      if (value === "1") {
        navigate('/epuser'); // Edit Profile
      } else if (value === "2") {
        navigate('/cpuser'); // Manage Password
      }
    };
   useEffect(()=>{
      setInterval(()=>{

         if(localStorage.getItem("role")=="admin"){
            setNavContent(
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
                                    <a class="nav-link adminpad" ><Link to="/admin" className='nav-a'> AdminHome </Link> </a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link adminpad" ><Link to="/manageuser " className='nav-a'> ManageUser </Link> </a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link adminpad"><Link to="/epadmin" className='nav-a'> Edit Profile </Link> </a>
                                 </li>
                                 
                                 <li class="nav-item">
                                    <a class="nav-link adminpad"><Link to="/cpadmin" className='nav-a'> Change Password </Link> </a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link adminpad"><Link to="/logout" className='nav-a'> Logout </Link> </a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link adminpad"><Link className='nav-a'>{localStorage.getItem('name')}</Link> </a>
                                 </li>
                              </ul>
                           </div>
                        </nav>
                     </div>
                  </div>
               </>
            );
         }else if(localStorage.getItem("role")=="user"){
            setNavContent(
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
                                    <a className="nav-link userpad" ><Link to="/viewblog" className='nav-a'> UserHome </Link> </a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link userpad"><Link to="/blog" className='nav-a'> Blog </Link> </a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link userpad"><Link to="/contact" className='nav-a'> Contact Us </Link> </a>
                                 </li>
                                 <li className="nav-item">
                                    <select className="form-select select nav-link " onChange={handleSelect} aria-label="Default select example">
                                       <option value="" class="nav-link userpad">PROFILE SETTINGS</option>
                                       <option value="1" class="nav-link userpad">EDIT PROFILE</option>
                                       <option value="2" class="nav-link userpad">MANAGE USER</option>
                                    </select>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link userpad"><Link to="/logout" className='nav-a'> Logout </Link> </a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link userpad"><Link className='nav-a'>{localStorage.getItem('name')}</Link> </a>
                                 </li>
                              </ul>
                           </div>
                        </nav>
                     </div>
                  </div>
               </>
            );
         }else{
            setNavContent(
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

      },1)
   },[])




  return (
      <>
         <Auth />
         {NavContent}
      </>
  );
}

export default Nav;


