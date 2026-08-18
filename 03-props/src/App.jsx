import Card from "./components/Card"

const App = () => {
  return (
    <div className='parent'>
      <Card user="Roshan" age={19} img="https://images.unsplash.com/photo-1782935749690-98185f19396d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Rohit" age={21} img="https://images.unsplash.com/photo-1782827286510-e7f43171976b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Rohan" age={22} img="https://images.unsplash.com/photo-1782796474844-92cc237e9550?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App
