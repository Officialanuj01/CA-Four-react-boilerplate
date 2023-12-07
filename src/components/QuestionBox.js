import React, { useState} from 'react'
import questions from '../questions'
import { createContext } from 'react'
import Result from './Result'
import style from "./QuestionBox.module.css"

// we are calling the createContext hook to provide data to the Result.js 
export const finalScore = createContext()


export default function QuestionBox() {

  // creating all the states that are needed to make this functional

  const [count, setcount] = useState(0)  // counting the correct question

  const [presentQuestion, setPresentQuestion] = useState(0) // we are getting the current question number

  const [highlight, setRemoveHighLight] = useState(false) // checking the status of highlight

  const [currentToggle, setToggle] = useState(false) // changing the theame

  const question = questions[presentQuestion] // saving the questions from the question.js into a variable
  
  


  // option click when we click on a option this function will change the question
  function handleOptionClick(option){
    if (option.isCorrect){
      setcount(prevCount => prevCount+1)
    }
    
    if(presentQuestion<questions.length){
      setPresentQuestion(presentQuestion+1)
      
    }
    
  }

  // this function is handle the highligthBTN
  function handleHighLight(){
    setRemoveHighLight(true)
    
  }

  // this function is handle the remove highlightBTN
  function handleRemoveHighLight(){
    setRemoveHighLight(false)
  }

  // this function set the theme ligth or dark
  function handleToggle() {
    setToggle(!currentToggle);
    const body = document.querySelector('body');
    if (!currentToggle) {
      body.style.backgroundColor = 'black';
    } else {
      body.style.backgroundColor = 'initial'; 
    }
  }
  

  return (
    <div>
      <div>
        <h1 className={style.appName} style={{color: currentToggle?"white":"initial"}}>Quizzer</h1>
        <p className={style.slogen} style={{color: currentToggle?"white":"initial"}}>Perfectness can acheive only with practice</p>
      </div>

      {/* we are using conditional rendering to get the result page after the 5th question */}
      {(presentQuestion < questions.length)?   
      <div>
        <h1 className={style.currentQuestion} style={{color: currentToggle?"white":"initial"}}>{`Question ${presentQuestion+1} out of 5`}</h1>
        <div style={{color: highlight ? "red" : "black"}} className={style.question}>{question.text}</div>
        <div className={style.options}>
          {question.options.map((option,index)=>{
            return <div key={index}>
              <button onClick={()=>handleOptionClick(option)}
                  className={style.individualOption}>{option.text}</button>
            </div>
          })}
        </div>
        <div className={style.highlightbuttons}>
          <div><button onClick={handleHighLight} className={style.buttonsIndividual}>Highlight</button></div>
          <div><button onClick={handleRemoveHighLight} className={style.buttonsIndividual}>Remove Highlight</button></div>
          <div><button onClick={handleToggle} className={style.buttonsIndividual}>{currentToggle?"LIGHT":"DARK"}</button></div>
        </div>
      </div>
    :
      <div>
        {/* we are providing the count, setcount, setPresentQuestion to the result page to get the score, and make the restartBTN functional */}
        <finalScore.Provider value={{count,setcount,setPresentQuestion}}>
          <Result/>
        </finalScore.Provider>
      </div>}
</div>
  )
}
