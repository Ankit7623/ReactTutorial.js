import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(task);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white p-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 p-10 lg:w-1/2 items-start flex-col"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DETAILED VALA INPUT */}
        <textarea
          type="text"
          className="px-5 h-32 w-full font-medium py-2 flex items-start border-2 rounded outline-none"
          placeholder="Write Deatails"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:scale-95 w-full font-medium text-black px-5 py-2 rounded outline-none ">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 items-start justify-start mt-5 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div>
                <div
                  key={idx}
                  className="relative h-52 w-40 rounded-x text-black p-4
                  pb-5 bg-white"
                >
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-4 leading-tight font-medium text-gray-600">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full rounded-2xl bg-red-600 text-xs text-white cursor-pointer active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
