import React from 'react';
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div>
        <body id="logbody">
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
                        <li className="nav-item"><Link className="nav-link" to='/Signup'>Signup</Link></li>
                        
                        
                    
                        
                        
                        
                    </ul>
            
            </div>
            </div>
        </nav>
        
            <div className="box" id="logbox">
                <div className="container" id="logcontainer">
                    <div className="top-header">
                        <span id="logspan">Have an account?</span>
                        <header id="logheader">Login</header>

                    </div>
                    <div className="input-field" id="loginput-field">
                        <input type="text" className="input" id="loginput" placeholder="Username" required/>
                    </div>
                    <div className="input-field" id="loginput-field">
                        <input type="password" className="input" id="loginput" placeholder="password" required/>
                    </div>
                    <div className="input-field" id="loginput-field">
                        <input type="submit" className="submit" id="logsubmit" value="login"/>
                    </div>
                    <div className="bottom" id="logbottom">
                        <div classNameclassName="left" id="logleft">
                            <input type="checkbox" id="check"/>
                            <label for="check" id="loglabel">Remember Me</label>
                        </div>
                        <div className="right">
                            <label id="log label"><a href="#" id="loga">Forgot password?</a></label>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </div>
  );
}
export default Login;
