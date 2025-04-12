import './Register.css';
// import React from 'react';
import {useState} from 'react'
import axios from 'axios';
import {__userapiurl} from '../../Apiurl'
function Register() {
  
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [mobile,setMobile]=useState();
  const [output,setOutput]=useState();

  const handleSubmit=()=>{
    
    const userDetail = {"name":name,"email":email,"password":password,"mobile":mobile}
    
    axios.post(__userapiurl+"save", userDetail).then((response)=>{
      setOutput("user register successfully");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
    }).catch((error)=>{
      // console.log(error);
      setOutput('user not registered successful')
    });
  }
  return (

  <>
  
  <div class="container-fluid overflow-hidden py-5 px-lg-0">
        <div class="container about py-5 px-lg-0">
            <div class="row g-5 mx-lg-0">
               
                <div class="col-lg-12 about-text wow fadeInUp" data-wow-delay="0.3s">
                   <font style={{"color":"blue"}}>{output}</font>
                    <h1 class="mb-5">Register Here :</h1>
                  <div class="container">
                    <div class="row">
                        <div class="col-6">
                          <form>
                            {/* to check its working or not */}
                            {/* {name} */}
                            <div class="mb-3">
      
                            <div class="mb-3">
                              <label for="name" class="form-label">Name</label>
                              {/* onchange chlne or field ki value ko target krenge */}
                              <input type="text" class="form-control" placeholder='Enter name' value={name} onChange={e=>setName(e.target.value)} />
                                
                              {/* {email} */}
                              </div>
                            
                              <label for="email" class="form-label">Email address</label>
                              <input type="email" class="form-control" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
                              
                            </div>
                            
                            <div class="mb-3">
                              <label for="password" class="form-label">Password </label>
                              <input type="password" class="form-control" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                            </div>
                           
                            <div class="mb-3">
                              <label for="mobile" class="form-label">Mobile</label>
                              <input type="text" class="form-control" placeholder='mobile' value={mobile} onChange={e=>setMobile(e.target.value)}/>
                            </div>
                            
                            <button type="button" class="btn btn-danger" onClick={handleSubmit}>Register</button>
                          </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  </>
  );
}

export default Register;

