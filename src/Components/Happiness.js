import React from 'react'
import {Link} from 'react-router-dom'

export default function Happiness() {
  return (
    <div>
                <body id="hapbody">
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
            <p><b><h1 id="haph1">Submitted successfully!</h1></b></p>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>





        </body>
    </div>
  )
}
