import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {
  // const [currentToggle, setToggle] = useState(false)
  // function handleToggle() {
  //   setToggle(!currentToggle);
  //   const body = document.querySelector('body');
  //   if (!currentToggle) {
  //     body.style.backgroundColor = 'black';
  //   } else {
  //     body.style.backgroundColor = ''; // Revert to initial color (default or any other color set in CSS)
  //   }
  // }

  return (
    <div>
      {/* <button style={{backgroundColor: currentToggle ? "gray" :"white"}} onClick={handleToggle}>Toggle</button> */}
      <QuestionBox/>
      
    </div>
  );
}

export default App;