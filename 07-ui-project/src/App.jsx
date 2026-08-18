import Section1 from "./components/Section1/Section1.jsx"
import Section2 from "./components/Section2/Section2.jsx"

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      color: 'lightblue',
      tag: 'Satisfied',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      color: 'lightgreen',
      tag: 'Underserved',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672373830660-4655ca9de6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8MHx8fDA%3D',
      intro: '',
      color: 'lightcoral',
      tag: 'Underbanked'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
