import React from 'react'
import "./Card.css"

const Card = (info) => {
  return (
    <div className='card'>
      <img src="https://ethz.ch/en/studies/bachelor/beginning-your-studies/subject-related-preparation/programming-beginners/_jcr_content/par/fullwidthimage/image.imageformat.1286.1887369971.jpg" alt="coding" style={{borderRadius: "0.7rem",border: "0.2px solid black"}} />
      <h2>{info.title}</h2>
      <p>{info.description}</p>
    </div>
  )
}

export default Card
