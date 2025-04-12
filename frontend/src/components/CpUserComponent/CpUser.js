import './CpUser.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {__userapiurl} from '../../Apiurl'

function CpUser() {
    const [output,setOutput]=useState();
    const [opass,setOPass]=useState();
    const [npass,setNPass]=useState();
    const [cnpass,setCnPass]=useState();   

    
    const handleSubmit =()=>{
        axios.get(__userapiurl+"fetch?email="+localStorage.getItem('email')+"&password="+opass).then((response)=>{
            if(npass==cnpass)
            {
                let updateDetail= {"condition_obj":{"email":localStorage.getItem('email')},"content_obj":{"password":npass}};
                axios.patch(__userapiurl+"update",updateDetail).then((response)=>{
                    setOutput("Password change Successfully");
                    setOPass("");
                    setNPass("");
                    setCnPass("");
                }).catch((error)=>{
                    setOutput("Password not change Successfully")
                    setOPass("");
                    setNPass("");
                    setCnPass("");
                });
            }
            else
            {
                setOutput("new password and confrim password are not matched");
                setNPass("");
                setCnPass("");
            }    


        });

    }
    return (
    <>
    {/* About Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title mb-4">
                    <h1 class="display-5 mb-0">Change Password Here!!!!!</h1>
                        <br />
                        <span style={{"color":"red"}}>{output}</span>
                        <br />
                        <form>
                            <div class="form-group">
                              <label for="Opass">Old Password :</label>  
                              <input type="password" class="form-control" value={opass} onChange={e=>setOPass(e.target.value)}/>
                            </div>
                            <br />
                            <div class="form-group">
                              <label for="Npass">New Password :</label>  
                              <input type="password" class="form-control" value={npass} onChange={e=>setNPass(e.target.value)}/>
                              </div>
                              <br />
                              <div class="form-group">
                              <label for="Cnpass">Confirm New Password :</label>  
                              <input type="password" class="form-control" value={cnpass} onChange={e=>setCnPass(e.target.value)}/>
                              </div>
                         
                              <br />
                             
                            <button type="button" class="btn btn-info" onClick={handleSubmit}>Change Password</button>

                        </form>
  
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* About End */}


    </>
    );
}

export default CpUser;