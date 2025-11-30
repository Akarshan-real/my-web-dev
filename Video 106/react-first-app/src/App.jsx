import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis cum provident doloremque ipsa minima nisi totam aperiam? Perferendis suscipit impedit porro";

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
      <Card title="card 1" description={text}/>
      <Card title="card 2" description={text}/>
      <Card title="card 3" description={text}/>
      <Card title="card 4" description={text}/>
      </div>
      <Footer />
    </>
  )
}

export default App
