import { useState, useEffect, useRef } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import Label from './components/Label'
import './App.css'
const API = import.meta.env.VITE_API_URL;
let userName = localStorage.getItem("userName");

userName = prompt(`Enter you name , please!`)
while (!userName || userName.trim() === '') {
  userName = prompt("Enter a valid name which is not blank");
};
localStorage.setItem("userName", userName.trim());

function App() {

  const [select, setSelect] = useState(false);
  const [notRefreshedPage, setNotRefreshedPage] = useState(true);
  const [data, setData] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [editValue, setEditValue] = useState("");
  const [editing, setEditing] = useState(false);

  // ----------------------------------------------------------------------------------------------

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`${API}/api/todos/${userName}`);
        if (response.ok) {
          const user = await response.json();
          setData(user.todos || []);
        }
        else {
          throw new Error("Backend problem");
        }
      }
      catch (error) {
        console.log(`Error is ${error}`);
      }
    })();
  }, []);

  async function saveTodosForBackend(updatedTodosArray) {
    try {
      await fetch(`${API}/api/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName, todos: updatedTodosArray })
      })
    }
    catch (error) {
      console.error(`Error happened : ${error}`);
    }
  };

  // ----------------------------------------------------------------------------------------------

  const handelAddData = async (xtra) => {
    xtra = xtra.trim();
    if (xtra === '') {
      alert("Enter a valid todo");
    }
    else {
      const updatedTodosArray = [...data, xtra];
      setData(updatedTodosArray);
      await saveTodosForBackend(updatedTodosArray);
    }
  };

  const handelCheckChange = (idx) => {
    setSelectedIndexes(prev => {
      if (prev.includes(idx)) {
        const data = prev.filter(i => i !== idx);
        return data;
      }
      else {
        const data = [...prev, idx]
        return data;
      }
    });
  };

  // ----------------------------------------------------------------------------------------------

  const handleSelectClick = () => {
    setNotRefreshedPage(false);
    setSelect(true);
  };

  useEffect(() => {
    setEditValue(data[selectedIndexes[0]]);
  }, [selectedIndexes, data]);

  const handleCancel = () => {
    setEditing(false);
    setSelect(false);
    setSelectedIndexes([]);
  };

  const handelEdit = async () => {
    if (!editing) {
      setEditing(true);
    }
    else {
      const updatedTodosArray = data.map((item, index) =>
        index === selectedIndexes[0] ? editValue : item
      );
      await saveTodosForBackend(updatedTodosArray);
      setData(updatedTodosArray);
      setEditing(false);
      setSelectedIndexes([]);
      setSelect(false);
    }
  };

  const handelDelete = async () => {
    const updatedTodosArray = data.filter((_, i) => !selectedIndexes.includes(i));
    setData(updatedTodosArray);
    await saveTodosForBackend(updatedTodosArray);
    setSelectedIndexes([]);
    setSelect(false);
  };

  // ----------------------------------------------------------------------------------------------

  return (
    <div className='mx-auto flex flex-col items-center overflow-x-hidden gap-4 bg-(--navbar-bg) h-screen'>

      {/* NAVBAR */}
      <Navbar todos={data} />

      {/* MAIN CONTAINER */}
      <div className="todos w-[calc(100%-2rem)] h-fit bg-(--content-bg) rounded-2xl p-4 flex flex-col gap-5">

        {/* ADD A TODO */}
        <h2 className='font-bold text-4xl'>Add a ToDo</h2>

        {/* ADD BOX */}
        <Label onAdd={handelAddData} />

        {/* HEADING OF YOUR TODOS */}
        <h2 className='font-bold text-4xl w-fit'>Your ToDos</h2>

        {/* TODO BUTTONS */}
        <div className='h-12 flex items-center gap-8 relative'>

          {/* SELECT BUTTON */}
          <div className={`absolute left-0 top-0 h-full 
          ${notRefreshedPage ? "opacity-100" : (select ? "slideOut" : "slideIn")
            }`}>
            <button
              type="button"
              className="selectButton flex justify-center items-center"
              onClick={data.length > 0 ? handleSelectClick : null}
              disabled={data.length === 0}>
              Select
            </button>
          </div>

          {/* CANCEL , EDIT , DELETE BUTTON */}
          <div className={`absolute left-0 top-0 h-full flex gap-4 ${notRefreshedPage ? "opacity-0 pointer-events-none" : (select ? "slideIn" : "slideOut")
            }`}>
            <button
              type='button'
              className="operationButtons flex justify-center items-center cancel"
              onClick={handleCancel}>
              Cancel
            </button>

            <button
              type='button' className={`operationButtons flex justify-center items-center edit ${selectedIndexes.length === 1 ? "" : "opacity-50 pointer-events-none"}`}
              onClick={handelEdit}>
              {editing ? "Save" : "Edit"}
            </button>

            <button
              type='button' className={`operationButtons flex justify-center items-center delete ${selectedIndexes.length > 0 ? "" : "opacity-50 pointer-events-none"}`}
              onClick={handelDelete}>
              Delete
            </button>
          </div>

        </div>

        {/* TODO CONTAINER */}
        <div className='flex flex-col gap-3'>
          {data.map((element, index) => (
            <Todo
              key={index}
              info={element}
              show={select}
              onCheckChange={handelCheckChange}
              index={index}
              isEditing={editing && selectedIndexes.includes(index)}
              setEditValue={setEditValue}
              isSelected={selectedIndexes.includes(index)}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default App
