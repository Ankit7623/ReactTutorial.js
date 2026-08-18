const App = () => {
  const [title, setTitle] = useState('');

  const submitHandler = (elem) => {
    elem.preventDefault();
    console.log("Form Submitted by", title);
    setTitle('')
  };

  return (
    <div>
      <form
        onSubmit={(elem) => {
          submitHandler(elem);
        }}
      >
        <input type="text" placeholder="Enter your name" value={title} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
