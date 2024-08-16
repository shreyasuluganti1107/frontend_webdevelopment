import React from 'react';
import {Link} from 'react-router-dom';


export default function Signup() {
  return (
    <div>
        <body id="signbody">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <h1><a href="#" className="navbar-brand"> Happiness Quotient </a></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
                        
                        <span className="navbar-toggler-icon"></span>
                        <i className="bx bx-menu"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="mynav">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>

                    
                        
                    </ul>
            
            </div>
            </div>
        </nav>
        
            <div className="box" id="signbox">
                <div className="container" id="signcontainer">
                    <div className="top-header">
                        
                        <header id="signheader">Sign Up</header>

                    </div>
                    <div className="input-field" id="signinput-field">
                        <input type="text" className="input" id="signinput" placeholder="Enter Name" required/>
                    </div>
                    <div className="input-field" id="signinput-field">
                        <input type="text" className="input" id="signinput" placeholder="Enter School Name" required/>
                    </div>
                    <div className="input-field" id="signinput-field">
                        <input type="text" className="input" id="signinput" placeholder="Enter District Name" required/>
                    </div>

                    <div className="input-field" id="signinput-field">
                        <input type="password" className="input" id="signinput" placeholder="Create Password" required/>
                        
                    </div>
                    <div className="input-field" id="signinput-field">
                        <label for="Role" id="signlabel">Choose Your Role:</label>
                        
                        <select name="form" id="signform" onchange="location=this.value;">
                          <option value="">Select Option</option>
                          <option value="">Teacher</option>
                          <option value="">Parent</option>
                          <option value="">Student</option>
                          <option value="">Admin</option>
                          <option value="">Accredited official</option>
                        </select>
                    </div>
                    <div className="input-field" id="signinput-field">
                        <input type="submit" className="submit" id="signsubmit" value="Signup"/>
                    </div>
                    <div className="bottom" id="signbottom">
                            
                            
                            <label id="signlabel">Already a member?<Link to='/Login'>login</Link></label>
                        
                    </div>
                </div>
            </div>
        </body>
    </div>
  )
}
