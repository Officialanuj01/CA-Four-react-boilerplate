import React from 'react'
import QuestionBox, { finalScore } from './QuestionBox'
import { useContext } from 'react'
import style  from './Result.module.css'


export default function Result() {
  // getting the count, setPresentQuestion, setcount from the QuestionBox.js by using useContext hook
  const {count,setPresentQuestion,setcount }= useContext(finalScore)

  //handle the logic of restartBTN
  function handleRestart(){
    setPresentQuestion(0)
    setcount(0)
    
  }
  
  return (
    <div>
      <div className={style.resultContainer}>
        <h1 className={style.result}>Result</h1>
        <h1 className={style.correctQuestion}>{`${count} is correct out of 5`}</h1>
        <h1 className={style.scorePercentage}>{`${(count*100)/5} Percentage`}</h1>
      </div>
      <button className={style.resetBTN} onClick={handleRestart}>Restart</button>
    </div>
  )
}
