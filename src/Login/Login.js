import React from "react";
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUser,
    faLock
} from '@fortawesome/free-solid-svg-icons'
function Login (){
    return<>
    <div className="loginArea">
       <div className="loginBox">
           <div className="row">
               <div className="col-md-5">
                   <div className="loginSidebar">
                    <div className="loginLogo"><img src={"logo.jpg"} /></div>
                    <div className="loginContent">
                        <h1>Welcome back</h1>
                        <p>Thanks for your efforts to work faster and be more productive</p> 
                    </div>
                   </div>
               </div>
               <div className="col-md-7">
                   <div className="loginForm">
                   <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faUser} /></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faLock} /></span>
                        </div>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="input-group mb-3">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck" 
                                    name="example1"/>
                        <label class="custom-control-label" for="customCheck">
                                Remember Me
                        </label>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                        <button type="button" className="btn btn-success">Login</button>
                    </div>

                  
                   </div>
               </div>
           </div>
        </div> 
    </div>
    </>
}

export default Login;