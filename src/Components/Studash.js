import React from 'react'
import {Link} from 'react-router-dom'


export default function Studash() {
  return (
    <div>
        <body id="sdbody">
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

    
    
                <p><b><h1 id="sdh1">Student</h1></b></p>
                <div className="box" id="sdbox">
                <div className="container" id="sdcontainer">
                <div className="text-center">
                    <button type="button" className="btn" id="sdbtn" onclick="window.location.href = 'student.html';">Take test</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn" id="sdbtn" onclick="window.location.href = 'quotient.html';">Happiness Quotient</button>
                  </div>
                  </div>
                  </div>

    
</body>
    </div>
  );
}
