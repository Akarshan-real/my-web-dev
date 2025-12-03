import { useState, useEffect, useRef } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import Label from './components/Label'
import './App.css'

function App() {

  const [select, setSelect] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleCancelStart = () => {
    setIsClosing(true);
  };
  const handleAnimationEnd = () => {
    if (isClosing) {
      setSelect(false);
      setIsClosing(false);
    }
  };

  const a = [
    { todo: "You have to complete the homework" },
    { todo: "You have to complete the plant watering" },
    { todo: "Pray to god that you pass this sem" },
    { todo: "Drink water" },
  ];


  return (
    <div className='mx-auto flex justify-center flex-col items-center overflow-x-hidden gap-4'>
      <Navbar />
      <div className="todos w-[calc(100%-2rem)] h-fit bg-pink-200 rounded-2xl p-4 flex flex-col gap-5">
        <h2 className='font-bold text-4xl'>Add a ToDo</h2>
        <Label />
        <h2 className='font-bold text-4xl yourTodosH3'>Your ToDos</h2>
        <div className='h-12 flex items-center gap-8 relative'>
          {!select && 
          <button type="button" 
          className='selectButton mid select' 
          onClick={() => setSelect(true)}>
          Select</button>}

          {select && <>
            <button type='button' 
            className={`mid operationButtons cancel ${isClosing ? 'reverse' : ''}`} 
            onClick={() => {setSelect(false);
            onAnimationEnd(() => setIsClosing(true))}}>Cancel</button>

            <button type='button' className={`mid operationButtons edit ${isClosing ? 'reverse' : ''}`} >Edit</button>

            <button type='button' className={`mid operationButtons delete ${isClosing ? 'reverse' : ''}`}>Delete</button>
          </>
        }
        </div>
        <div>
          {a.map((element, index) => (<Todo key={index} info={element} show={select} />))}
        </div>
      </div>
    </div>
  )
}

export default App
