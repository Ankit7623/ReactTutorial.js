// import {useState} from "react"
// import { useEffect } from "react"

// const App = () => {

// const [num, setNum] = useState(0)
// const [num2, setNum2] = useState(100)

// useEffect(function(){
//   console.log("use effect is running...")
// }, [num])

//   return (
//     <div>
//       <h1>value of num is {num}</h1>
//       <h1>value of num2 is {num2}</h1>
//       <button onMouseEnter={()=>{
//         setNum(num+1)
//       }}
//       onMouseLeave={()=>{
//         setNum2(num2+2)
//       }}
//       >Click</button>
//     </div>
//   )
// }

// export default App

import {useState} from "react";
import {useEffect} from "react"

const App = () => {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function achanging() {
    console.log("A ki value ho gayi")
  }
  function bchanging() {
    console.log("B ki value ho gayi")
  }

  useEffect(function(){
    achanging()
    console.log("use effect is running...")
  }, [a])
  useEffect(function(){
    bchanging()
    console.log("use effect is running...")
  }, [b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>A change</button>
      <button onClick={()=>{
        setB(b-1)
      }}>B change</button>
    </div>
  )
};

export default App;
