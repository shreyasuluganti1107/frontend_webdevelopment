import React from 'react'
import {Link} from 'react-router-dom'


export default function Teacher() {
  return (
    <div >
        <body id="teabody">
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <h1><a href="#" className="navbar-brand"> Happiness Quotient</a></h1>
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
        <h2 id="teah2">Teacher</h2>
        <br/>
        <br/>
    
    
    <div className="txt" id="teatxt">
    <button className="button" id="teatogBtn">Start Quiz</button>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/>

    </div>
    <div id="teahide">
        <form name="quiz" id="quiz">
            <div>
                <p id="teap" >1.The school staff is caring and respects the students and staff</p>
                <p id="teap" ><input type="radio" name="question1" value="strongly agree"/>A.strongly agree</p>
                <p id="teap"><input type="radio" name="question1" value="strongly agree"/>A.strongly agree</p>
                <p id="teap"><input type="radio" name="question1" value="Neutral"/>B.Neutral</p>
                <p id="teap"><input type="radio" name="question1" value="Strongly disagree"/>C.Strongly disagree</p>
                <br/>
                <br/>
            </div>
            <div>
                <p id="teap">2.The schooling staff has a sense of ownership and responsibility</p>
                <p id="teap"><input type="radio" name="question2" value="strongly agree"/>A.strongly agree</p>
                <p id="teap"><input type="radio" name="question2" value="Neutral"/>B.Neutral</p>
                <p id="teap"><input type="radio" name="question2" value="Strongly disagree"/>C.Strongly disagree</p>
                <br/>
                <br/>
            </div>
            <div>
                <p id="teap">3.The school staff collectively brainstorms on resolutions to provide effective learning</p>
                <p id="teap"><input type="radio" name="question3" value="strongly agree"/>A.strongly agree</p>
                <p id="teap"><input type="radio" name="question3" value="Neutral"/>B.Neutral</p>
                <p id="teap"><input type="radio" name="question3" value="Strongly disagree"/>C.Strongly disagree</p>
                <br/>
                <br/>
            </div>
            <div>
                <p id="teap">4.The school puts equal emphasis on academics as well as sports</p>
                <p id="teap"><input type="radio" name="question4" value="strongly agree"/>A.strongly agree</p>
                <p id="teap"><input type="radio" name="question4" value="Neutral"/>B.Neutral</p>
                <p id="teap"><input type="radio" name="question4" value="Strongly disagree"/>C.Strongly disagree</p>
                <br/>
                <br/>
            </div>
            <div>
                <p id="teap">5.How often are activities conducted to make students learning fun?</p>
                <p id="teap"><input type="radio" name="question5" value="Most Often"/>A.Most Often</p>
                <p id="teap"><input type="radio" name="question5" value="Sometimes "/>B.Sometimes </p>
                <p id="teap"><input type="radio" name="question5" value="Not very often"/>C.Not very often</p>
                <br/>
                <br/>
            </div>
            <div>
                <p id="teap">6.How satisfied are you with the appraisal given by the school/college?</p>
                <p id="teap"><input type="radio" name="question6" value="Very satisfied "/>A.Very satisfied </p>
                <p id="teap"><input type="radio" name="question6" value="Somewhat Satisfied"/>B.Somewhat Satisfied</p>
                <p id="teap"><input type="radio" name="question6" value="Not Satisfied"/>C.Not Satisfied</p>
                <br/>
                <br/>
            </div>
            <div>
                <p id="teap">7.How would you describe your relationship with the students?</p>
                <p id="teap"><input type="radio" name="question7" value="Great "/>A.Great </p>
                <p id="teap"><input type="radio" name="question7" value="Neutral"/>B.Neutral</p>
                <p id="teap"><input type="radio" name="question7" value="Not good"/>C.Not good</p>
                <br/>
                <br/>
            </div>
            <div>
                <p id="teap">8.How would you describe your relationship with other teachers?</p>
                <p id="teap"><input type="radio" name="question8" value="Great "/>A.Great </p>
                <p id="teap"><input type="radio" name="question8" value="Neutral"/>B.Neutral</p>
                <p id="teap"><input type="radio" name="question8" value="Not good"/>C.Not good</p>
                <br/>
                <br/>
            </div>
            <div className="container text-center">
                <button type="button" className="btn btn-lg btn-warning"id="teabtn" onclick="location.href='happiness.html'"  >Submit</button>
            </div>
            

        </form>
    </div>
    </div>
    
</body>
    </div>
  )
}
