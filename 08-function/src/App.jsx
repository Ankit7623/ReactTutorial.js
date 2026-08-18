const App = () => {
// function inchange(chan) {
//   console.log(chan)
// }

  const pageScrolling = (elem) =>{
    if (elem > 0) {
      console.log("Seedh")
    } else {
      console.log("Ulta")
    }
  }

  return (
    <div
      onWheel={(elem) => {
        pageScrolling(elem.deltaY)
      }}
    >
      {/* <button onChange={function(){
        console.log("Hello yrr")
      }}>chage user</button>
      
      <input onChange={function(elem){
        inchange(elem.target.value)
      }}
      type="text" placeholder="Enter text" /> */}

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
