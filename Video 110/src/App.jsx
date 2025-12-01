import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const [todo, setTodo] = useState([
    { title: "Hey", description: "I am good todo" },
    { title: "Hi", description: "I am fabulous todo" },
    { title: "Hello", description: "I am awesome todo" }
  ])

  const Todo = ({ info }) => {
    return (
      <>
        <div className="flex gap-2 p-4 rounded-[5px] border-white justify-center items-center m-2 border-[0.5px]">
          <div className="todo">{info.title}</div>
          <div className="todo">{info.description}</div>
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* {showBtn? <button>{`showBtn is true`}</button> : <button>{`showBtn is false`}</button>} */}
      {/* {showBtn && <button>{`showBtn is ${showBtn}`}</button>} */}

      {todo.map((items,index)=> {
        return <Todo key={index} info={items} />
      })}

      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          Switch
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App