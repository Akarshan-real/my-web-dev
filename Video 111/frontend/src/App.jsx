import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

async function dataPull(link) {
  let data = [];
  try {
    const response = await fetch(link,{headers:{"x-api-key":import.meta.env.VITE_API_KEY}});
    data = await response.json();
  }

  catch (error) {
    console.log(error);
  }

  return data;
}

function App() {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await dataPull("http://localhost:3000/getJsonDataItems");
      setDisplayData(data);
    })()
  }, []);

  return (
    <div className='m-0 p-0 bg-[#382153] w-full h-auto'>
      <Navbar />
      <div className="bigBox p-6 flex justify-center items-center flex-wrap w-11/12 h-auto gap-2.5 m-auto">
        {displayData.map((eachOne, index) => (
          <Card key={index} info={eachOne} />
        ))}
      </div>
    </div>
  )
}

export default App
