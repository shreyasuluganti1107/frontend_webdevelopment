import React from 'react'
import {Link} from 'react-router-dom'


export default function Student() {
  return (
    <div>
        <body id="stubody">
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
        <h2 id="stuh2">How happy are you?</h2>
        <br/>
        <br/>
    </div>
    
    <div className="txt" id="stutxt">
    <button className="button" id="stutogBtn">Start Quiz</button>
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
    <div id="stuhide">
        <form name="quiz" id="stuquiz">
            <div>
                <p>1.Do you have supportive classNamemates?</p>
                <p><input type="radio" name="question1" value="Yes, extremely supportive"/>A.Yes, extremely supportive</p>
                <p><input type="radio" name="question1" value="Neutral"/>B.Neutral</p>
                <p><input type="radio" name="question1" value="No, extremely unsupportive"/>C.No, extremely unsupportive</p>
                <br/>
                <br/>
            </div>
            <div>
                <p>2.Do you think that the school provides you with adequate sports facilities? </p>
                <p><input type="radio" name="question2" value="Yes"/>A.Yes</p>
                <p><input type="radio" name="question2" value="No"/>B.No</p>
                <p><input type="radio" name="question2" value="Not always"/>C.Not always</p>
                <br/>
                <br/>
            </div>
            <div>
                <p>3.How much time do you spend every day on homework?</p>
                <p><input type="radio" name="question3" value="1-2 hours"/>A.1-2 hours</p>
                <p><input type="radio" name="question3" value="3 hours"/>B.3 hours</p>
                <p><input type="radio" name="question3" value=">3 hours"/>C. more than 3 hours</p>
                <br/>
                <br/>
            </div>
            <div>
                <p>4. Does your teacher encourage you to perform better?</p>
                <p><input type="radio" name="question4" value="Yes, all the time"/>A.Yes, all the time</p>
                <p><input type="radio" name="question4" value="Only sometimes "/>B.Only sometimes </p>
                <p><input type="radio" name="question4" value="No, not at all"/>C.No, not at all</p>
                <br/>
                <br/>
            </div>
            <div>
            <p>5.Do you feel it gets hectic to study at home after school/college?</p>
                <p><input type="radio" name="question5" value="Not at all hectic"/>A.Not at all hectic</p>
                <p><input type="radio" name="question5" value="Somewhat hectic "/>B.Somewhat hectic </p>
                <p><input type="radio" name="question5" value="very hectic"/>C.very hectic</p>
                <br/>
                <br/>
            </div>
            <div>
                <p>6.Have you ever been bullied in this school?</p>
                    <p><input type="radio" name="question6" value="No"/>A.No</p>
                    <p><input type="radio" name="question6" value="I know someone who was bullied"/>B.I know someone who was bullied</p>
                    <p><input type="radio" name="question6" value="Yes"/>C.Yes</p>
                    <br/>
                    <br/>
                </div>
                <div>
                    <p>7.Would you like more extracurricular activities to be conducted?</p>
                        <p><input type="radio" name="question7" value="Yes"/>A.Yes</p>
                        <p><input type="radio" name="question7" value="maybe"/>B.maybe</p>
                        <p><input type="radio" name="question7" value="No"/>C.No</p>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <p>8.How likely would you recommend this school to a friend?</p>
                            <p><input type="radio" name="question8" value="Very likely "/>A.Very likely </p>
                            <p><input type="radio" name="question8" value="Somewhat likely"/>B.Somewhat likely</p>
                            <p><input type="radio" name="question8" value="Not likely"/>C.No likely</p>
                            <br/>
                            <br/>
                        </div>
                        <div className="container text-center">
                            <button type="button" className="btn btn-lg btn-warning"id="stubtn" onclick="location.href='happiness.html'"  >Submit</button>
                        </div>
            

        </form>
    </div>
    


    
</body>
    </div>
  );
}
