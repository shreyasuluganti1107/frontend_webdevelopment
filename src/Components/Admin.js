import React from 'react';
import {Link} from 'react-router-dom'

export default function Admin() {
  return (
    <div>
        <body id="admbody">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
            <h1><a href="#" class="navbar-brand"> Happiness Quotient</a></h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
                
                <span class="navbar-toggler-icon"></span>
                <i class="bx bx-menu"></i>
            </button>
            <div class="collapse navbar-collapse" id="mynav">
            <ul class="navbar-nav">
                
                <li class="nav-item"><Link class="nav-link" to='/'>Home</Link></li>
                
                
                
            
                
                
                <br/>
                <br/>
            
                
            </ul>
    
    </div>
    </div>
</nav>
    <p><b><h2 id="admh2">Admin Page</h2></b></p>
    <br/>
    <br/>
    <br/>
    <p><h1 id="admh1">Happiness quotient of school........</h1></p>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
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
