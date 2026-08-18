// import React, { useState } from 'react'

// const App = () => {

// const [num, setNum] = useState({user:'Ankit', age:19})

// const btnClickd = () => {
//   const newNum = {...num};
//   newNum.user = "Sarthak"
//   newNum.age = 28
//   setNum(newNum)
// }

//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClickd} >Click</button>
//     </div>
//   )
// }

// export default App

import { useState } from 'react'

const App = () => {

// const [num, setNum] = useState([10, 20, 30])
// const [num, setNum] = useState({user: 'Rishi', age: 20})
const [num, setNum] = useState(20)

const btnClickd = () => {
  // const newNum = [...num]
  // newNum.push(99)
  // setNum(newNum)

  // setNum(prev=>({...prev,age:30}))

  setNum(prev => (prev + 1))
  setNum(prev => (prev + 1))
  setNum(prev => (prev + 1))
}

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClickd} >Click</button>
    </div>
  )
}

export default App
