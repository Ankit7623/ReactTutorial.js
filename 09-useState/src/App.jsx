// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(10)
//   const [username, setUsername] = useState('Ritika')

//   function ChangeNum() {
//     setNum(30)
//     setUsername('Aman')
//   }

//   return (
//     <div>
//       <h1>Value of a is {num} <br/> value of user in {username}</h1>
//       <button onClick={ChangeNum} >Click</button>
//     </div>
//   )
// }

// export default App


import {useState} from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  function incre(){
    setNum(num + 1)
  }
  function decre(){
    setNum(num - 1)
  }
  function jumpfive(){
    setNum(num + 5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incre}>Increses</button>
      <button onClick={decre}>Decreses</button>
      <button onClick={jumpfive}>Jump by 5</button>
    </div>
  )
}

export default App

