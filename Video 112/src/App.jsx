import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({})

  const handClick = () => {alert("I am clicked")}
  const handelChange = (x) => {
    // setName(x.target.value)
    setForm({...form , [x.target.name]:x.target.value});
    console.log(form);
  }

  return (
    <>
    <div className="button">
      <button onClick={handClick}>Click me</button>
    </div>

    {/* <div className="red" onMouseOver={() => alert("I am over")}></div> */}
    <input type="text" name='email' value={form.email? form.email : ""} onChange={handelChange}/>
    <input type="text" name='phone' value={form.phone? form.phone : ""} onChange={handelChange}/>
    </>
  )
}

export default App
