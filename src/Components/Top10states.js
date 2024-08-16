import React from 'react'
import {Link} from 'react-router-dom'


export default function Top10states() {
  return (
    <div>
        <body id="topstbody">
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
<p><b><h1 id="topsth1">Top 10 list(states)</h1></b></p>
<div className="box" id="topstbox">
<table id="topsttable">
  <tr id="topsttr">
    <th id="topstth">S.NO</th>
    <th id="topstth">School Name</th>
    
  </tr>
  <tr id="topsttr">
    <td id="topsttd">1.</td>
    <td id="topsttd">  </td>
    
  </tr>
  <tr id="topsttr">
    <td id="topsttd">2.</td>
    <td id="topsttd"> </td>
   
  </tr>
  <tr id="topsttr">
    <td id="topsttd">3.</td>
    <td id="topsttd">  </td>
   
  </tr>
  <tr id="topsttr">
    <td id="topsttd">4.</td>
    <td id="topsttd">  </td>
  
  </tr>
  <tr id="topsttr">
    <td id="topsttd">5.</td>
    <td id="topsttd">  </td>
   
  </tr>
  <tr id="topsttr">
    <td id="topsttd">6.</td>
    <td id="topsttd">  </td>
    
  </tr>
  <tr id="topsttr">
    <td id="topsttd">7.</td>
    <td id="topsttd">  </td>
   
  </tr>
  <tr id="topsttr">
    <td id="topsttd">8.</td>
    <td id="topsttd">  </td>
   
  </tr>
  <tr id="topsttr">
    <td id="topsttd">9.</td>
    <td id="topsttd">  </td>
   
  </tr>
  <tr id="topsttr">
    <td id="topsttd">10.</td>
    <td id="topsttd">  </td>
  
  </tr>
</table>  </div>
  
  </body>
    </div>
  )
}
