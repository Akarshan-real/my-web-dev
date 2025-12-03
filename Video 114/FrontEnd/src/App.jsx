import { useState, useEffect, useRef } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import './App.css'

function App() {
  const a = [
    { todo: "You have to complete the homework" },
    { todo: "You have to complete the plant watering" },
    { todo: "Pray to god that you pass this sem" },
    { todo: "Drink water" },
  ];


  return (
    <div className='container mx-auto flex justify-center flex-col items-center'>
      <Navbar />
      <div className="todos w-[calc(100vw-2rem)] h-fit bg-pink-200 my-4 rounded-2xl p-4">
        <h2>Add a ToDo</h2>
        <div>
          <input type="text" name="todoAddBox" id="todoA" />
          <label htmlFor="todoAddBox">Enter What To Do 😎</label>
        </div>
        {/* {a.map((element,index)=>(<Todo key={index} info={element}/>))} */}
      </div>
    </div>
  )
}

export default App
