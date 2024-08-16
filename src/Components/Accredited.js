import React from 'react';
import {Link} from 'react-router-dom';

export default function Accredited() {
  return (
    <div>
        <body id="abody">
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <h1><a href="#" className="navbar-brand"> Happiness Quotient </a></h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
                
                <span className="navbar-toggler-icon"></span>
                <i className="bx bx-menu"></i>
            </button>
            <div className="collapse navbar-collapse" id="mynav">
            <ul class="navbar-nav">
                
                <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                
                
                
            
                
                
                <br/>
                <br/>
            
                
            </ul>
    
    </div>
    </div>
</nav>
    <p><b><h2 id="ah2">OFFICIAL PAGE</h2></b></p>
    <br/>
    <br/>
    <div className="box">
        <div className="container">
            <div className="input-field" id="ainput-field">
                <label for="Role" id="alabel"><b>SELECT STATE</b></label>
                <select name="form" id="aform" onchange="location=this.value;">
                  <option value="">Select Option</option>
                  <option value="Aandhra pradesh">Aandhra pradesh</option>
                  <option value="Arunachal pradesh">Arunachal pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <br/>
                  <br/>
                  <br/>
                </select>
                <br/>
                <br/>
                
            </div>
            <div className="input-field" id="ainput-field">
                <label for="Role" id="alabel"><b>SELECT DISTRICT</b></label>
                <select name="form" id="aform" onchange="location=this.value;">
                  <option value="">Select Option</option>
                  <option value="Anantapur">Anantapur</option>
                  <option value="Chittoor">Chittoor</option>
                  <option value="East godavari">East godavari</option>
                  <option value="Guntur">Guntur</option>
                  <option value="Kadapa">kadapa</option>
                  <br/>
                  <br/>
                  <br/>
                
                </select>
                <br/>
                <br/>
                
            </div>
            <div className="input-field" id="ainput-field">
                <label for="Role" id="alabel"><b>SELECT SCHOOL</b></label>
                <select name="form" id="aform" onchange="location=this.value;">
                  <option value="">Select Option</option>
                  <option value="St anthony's">St snthony's</option>
                  <option value="Birla open minds">Birla open minds</option>
                 <option value="st joseph's">st joseph's</option>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </select>
                <br/>
                <br/>
                <br/>
            </div>
            <div className="container text-center">
                <button type="button" className="btn btn-lg btn-warning"id="abtn" onclick="location.href='last page.html'" >Done</button>

            </div>
        </div>
    </div>
    
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
