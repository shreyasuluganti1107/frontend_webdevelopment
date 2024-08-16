import React from 'react'
import {Link} from 'react-router-dom'


export default function Top10() {
  return (
    <div>
        <body id="topbody">
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
<p><b><h1 id="toph1">Top 10 list(districts)</h1></b></p>
<div className="box" id="topbox">
<table id="toptable">
  <tr id="toptr">
    <th id="topth">S.NO</th>
    <th id="topth">School Name</th>
    
  </tr>
  <tr id="toptr">
    <td id="toptd">1.</td>
    <td id="toptd">  </td>
    
  </tr>
  <tr id="toptr">
    <td id="toptd">2.</td>
    <td id="toptd"> </td>
   
  </tr>
  <tr id="toptr">
    <td id="toptd">3.</td>
    <td id="toptd">  </td>
   
  </tr>
  <tr id="toptr">
    <td id="toptd">4.</td>
    <td id="toptd">  </td>
  
  </tr>
  <tr id="toptr">
    <td id="toptd">5.</td>
    <td id="toptd">  </td>
   
  </tr>
  <tr id="toptr">
    <td id="toptd">6.</td>
    <td id="toptd">  </td>
    
  </tr>
  <tr id="toptr">
    <td id="toptd">7.</td>
    <td id="toptd">  </td>
   
  </tr>
  <tr id="toptr">
    <td id="toptd">8.</td>
    <td id="toptd">  </td>
   
  </tr>
  <tr id="toptr">
    <td id="toptd">9.</td>
    <td id="toptd">  </td>
   
  </tr>
  <tr id="toptr">
    <td id="toptd">10.</td>
    <td id="toptd">  </td>
  
  </tr>
</table>
  </div>
  
  </body>
 
  </div>
)
}
