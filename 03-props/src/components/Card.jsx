

const Card = (props) => {
    
  return (
    <div className='Card'>
        <img src={props.img} alt="image"></img>
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ispum dolor sit amet consectetur adisicing alit.</p>
        <button>View pro</button>
      </div>
  )
}

export default Card
