import React from 'react';
import {Link} from 'react-router-dom'


 function  Index() {
  return (
    <div>
    <body id="indbody">
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
                <li className="nav-item"><Link className="nav-link" to='Signup'>Signup</Link></li>
                
                
            
                
                <li className="nav-item"><Link className="nav-link" to='Login'>Login</Link></li>
            
                
            </ul>
            </div>
    
    </div>
</nav>






    <header id="indheader">
        <div className="container">
        <div className="header-content" id="indheader-content">
            <br/>
            <br/>
            <h2><pre>Happiness is not by chance,
                 but by choice!!!....</pre></h2>
            <br/>
            <br/>
           <Link to='Login' className="ctn" id="indctn">Get Started!</Link>
        </div>
        </div>
        
        
    </header>
    <section className="working" id="indsection">
        <div className="container">
        <div className="row">
            <div className="col">
                <h1>How it works?</h1>
                <p>1. A student page ( Students are asked to answer few questions based on which happiness quotient of the school is calculated and based on the HQ of the school few activities are assigned to students which helps improve the HQ also feedback is taken from the students which can help the management do better)</p>
                <br/>
                <br/>  
                
                <p> 2. A teacher's page ( Teacher's are asked to answer few questions about school environment and few activities are suggested to the teacher's to make teaching more student friendly)</p>
                <br/>
                <br/>
                <br/>  
                <p> 3. A parent's page ( Parent's are asked to answer few questions about student's behaviour at home and feedback about school is taken which is sent the teachers/management to improve things and make it better for the students)</p>
                
            </div>
            <div className="col">
                <div className="image-gallery">
                    <div className="container">
                        
                        <div className="box" id="indbox">
                            <img src="children.jpeg" alt="children"/>  
                        </div>
                        <div className="box" id="indbox">
                            <img src="parent.jpeg" alt="parent"/>
                        </div>
                        <div className="box" id="indbox">
                            <img src="teacher.jpeg" alt="teacher"/>

                        </div>
                       
                    </div>

                </div>
            </div>
        </div>
        </div>
        <br/>
        <br/>
        
    </section>
    <footer className="contact" id="indcontact">
        <div className="content" id="indcontent">
            <h2 id="#indh2">Contact Us</h2>
            <p id="#indp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className="container" id="indcontainer">
            <div className="contactinfo" id="indcontactinfo">
                <div className="box">
                    <div className="icon" id="indicon"><i className="fa-solid fa-location-dot"></i></div>
                    <div className="text" id="indtext">
                        <h3>Address</h3>
                        <p>4671 sugar camp road, <br/>owatonna,minesota,<br/>55060</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon" id="indicon"><i className="fa-solid fa-phone"></i></div>
                    <div className="text" id="indtext">
                        <h3>Phone</h3>
                        <p>707-----03</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon" id="indicon"><i className="fa-solid fa-envelope"></i></div>
                    <div className="text" id="indtext">
                        <h3>Email</h3>
                        <p>shreya11@gmail.com</p>
                    </div>
                </div>
            </div>
            </div>
            
        
        
    </footer>
    
</body>

</div>
    );
    
}
export default Index;

  

