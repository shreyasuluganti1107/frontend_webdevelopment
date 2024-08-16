import React from 'react';
import {Link} from 'react-router-dom';

export default function Acdash2() {
  return (
    <div>
        <body id="ad2body">
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <h1><a href="#" class="navbar-brand"> Happiness Quotient </a></h1>
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

    
    
                <p><b><h1 id="ad2h1">Top 10 list</h1></b></p>
                <div className="box" id="ad2box">
                <div className="container" id="ad2container">
                <div className="text-center">
                    <button type="button" className="btn" id="ad2btn" onclick="window.location.href = 'top10states.html';">TOP 10(States)</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn" id="ad2btn" onclick="window.location.href = 'top10.html';">TOP 10(districts)</button>
                  </div>
                  </div>
                  </div>

    
</body>

    </div>
  )
}
