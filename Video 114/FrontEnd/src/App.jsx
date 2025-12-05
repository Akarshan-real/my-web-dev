import { useState, useEffect, useRef } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import Label from './components/Label'
import './App.css'

function App() {

  const [select, setSelect] = useState(false);
  const [notRefreshedPage, setNotRefreshedPage] = useState(true);
  const [data, setData] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const handelAddData = (xtra) => {
    setData([...data,xtra]);
  };

  const handelCheckChange = (idx) => {
      setSelectedIndexes(indexes => {
        if(indexes.includes(idx)) {
          return indexes.filter(i => i!== idx);
        }
        else {
          return [...indexes,idx];
        }
      });
  };

  const a = ["hello","mu me lelo"]

  const handelEdit = () => {

  };

  const handelDelete = () => {
    if (selectedIndexes.length != null) {
      const newDataArray = data.filter((_,index) => !selectedIndexes.includes(index));
      setData(newDataArray);
      selectedIndexes([]);
      setSelect(false);
    }
    else {
      alert("select one");
    }
  };


  const handleSelectClick = () => {
    setNotRefreshedPage(false);
    setSelect(true);
  };
  const handleCancel = () => {
    setSelect(false);
    setSelectedIndexes([]);
  };

  return (
    <div className='mx-auto flex flex-col items-center overflow-x-hidden gap-4 bg-(--navbar-bg) h-screen'>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTAINER */}
      <div className="todos w-[calc(100%-2rem)] h-fit bg-(--content-bg) rounded-2xl p-4 flex flex-col gap-5">

        {/* ADD A TODO */}
        <h2 className='font-bold text-4xl'>Add a ToDo</h2>

        {/* ADD BOX */}
        <Label onAdd={handelAddData}/>

        {/* HEADING OF YOUR TODOS */}
        <h2 className='font-bold text-4xl w-fit'>Your ToDos</h2>

        {/* TODO BUTTONS */}
        <div className='h-12 flex items-center gap-8 relative'>

          {/* SELECT BUTTON */}
          <div className={`absolute left-0 top-0 h-full 
          ${
            notRefreshedPage  ? "opacity-100" : (select ? "slideOut" : "slideIn")
          }`}>
            <button 
              type="button" 
              className="selectButton flex justify-center items-center"
              onClick={data.length > 0 ? handleSelectClick : null}
              disabled={data.length === 0}
            >
              Select
            </button>
          </div>

          {/* CANCEL , EDIT , DELETE BUTTON */}
          <div className={`absolute left-0 top-0 h-full flex gap-4 ${
            notRefreshedPage ? "opacity-0 pointer-events-none" : (select ? "slideIn" : "slideOut")
          }`}>
            <button 
              type='button'
              className="operationButtons flex justify-center items-center cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button type='button' className="operationButtons flex justify-center items-center edit"
            onChange={handelEdit}>Edit</button>
            <button type='button' className="operationButtons flex justify-center items-center delete"
            onChange={handelDelete}>Delete</button>
          </div>


        </div>

        {/* TODO CONTAINER */}
        <div className='flex flex-col gap-3'>
          {data.map((element, index) => (
            <Todo 
              key={index} info={element} show={select} index={index} isChecked={selectedIndexes.includes(index)} onCheckChange={handelCheckChange}
            />  
          ))}
        </div>

      </div>
    </div>
  )
}

export default App

