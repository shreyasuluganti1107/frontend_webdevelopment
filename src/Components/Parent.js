import React from 'react'
import {Link} from 'react-router-dom'


export default function Parent() {
  return (
    <div>
        <body id="parbody">
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
                
                
                
            
                
                
                <br/>
                <br/>
            
                
            </ul>
    
    </div>
    </div>
</nav>
    <div className="container">
        <h2 id="parh2">Parent</h2>
        <br/>
        <br/>
    </div>
    
    <div className="txt" id="partxt">
    <button className="button" id="partogBtn">Start Quiz</button>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <br/><br/><br/><br/>




    </div>
    <div id="parhide">
        <form name="quiz" id="parquiz">
            <div>
                <p id="parp">1.How happy are you with your child’s overall performance(academics & extra-curricular)?</p>
                <p id="parp"><input type="radio" name="question1" value="Very happy"/>A.Very happy</p>
                <p id="parp"><input type="radio" name="question1" value="Neutral"/>B.Neutral</p>
                <p id="parp"><input type="radio" name="question1" value="Not very happy"/>C.Not very happy</p>
                <br/>
                <br/>
            </div>
            <div>
                <p id="parp">2.How well do you think the school caters to your child’s learning needs?</p>
                <p id="parp"><input type="radio" name="question2" value="Very well"/>A.Very well</p>
                <p id="parp"><input type="radio" name="question2" value="Neutral"/>B.Neutral</p>
                <p id="parp"><input type="radio" name="question2" value="Not so well"/>C.Not so well</p>
                <br/>
                <br/>
            </div>
            <div>
                <p id="parp">3.Do you think there is a balance between academic workload and the school’s extracurricular activities? </p>
                <p id="parp"><input type="radio" name="question3" value="Yes"/>A.Yes</p>
                <p id="parp"><input type="radio" name="question3" value="Somewhat"/>B.Somewhat</p>
                <p id="parp"><input type="radio" name="question3" value="No"/>C.No</p>
                <br/>
                <br/>
            </div>
            <div>
                <p>4.Do you think the school should increase activities for out-of-school learning?</p>
                <p id="parp"><input type="radio" name="question4" value="Yes"/>A.Yes</p>
                <p id="parp"><input type="radio" name="question4" value="Somewhat"/>B.Somewhat</p>
                <p id="parp"><input type="radio" name="question4" value="No"/>C.No</p>
                <br/>
                <br/>
            </div>
            <div>
                <p id="parp">5.Does the school provide an opportunity for you to discuss your child’s overall performance?</p>
                <p id="parp"><input type="radio" name="question5" value="Yes"/>A.Yes</p>
                <p id="parp"><input type="radio" name="question5" value="Somewhat "/>B.Somewhat </p>
                <p id="parp"><input type="radio" name="question5" value="No"/>C.No</p>
                <br/>
                <br/>
            </div>
            <div>
            <p id="parp">6.Do you think that your child has too much academic work after school?</p>
                <p id="parp"><input type="radio" name="question6" value="Yes"/>A.Yes</p>
                <p id="parp"><input type="radio" name="question6" value="Somewhat "/>B.Somewhat </p>
                <p id="parp"><input type="radio" name="question6" value="No"/>C.No</p>
                <br/>
                <br/>
            </div>
            <div className="container text-center">
                <button type="button" className="btn btn-lg btn-warning"id="parbtn" onclick="location.href='happiness.html'"  >Submit</button>
            </div>
            

        </form>
    </div>
    </body>
    </div>
  )
}
