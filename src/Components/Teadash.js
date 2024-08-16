import React from 'react';
import {Link} from 'react-router-dom'


export default function Teadash() {
  return (
    <div>
     <body id="tdbody">
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

    
    
                <p><b><h1 id="tdh1">Teacher</h1></b></p>
                <div className="box" id="tdbox">
                <div className="container" id="tdcontainer">
                <div className="text-center">
                    <button type="button" className="btn" id="tdbtn" onclick="window.location.href = 'teacher.html';">Take test</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn" id="tdbtn" onclick="window.location.href = 'quotient.html';">Happiness Quotient</button>
                  </div>
                  </div>
                  </div>

    
</body>
    </div>
  )
}
