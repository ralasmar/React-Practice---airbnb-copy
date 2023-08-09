import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import './style.css';


export default function App() {
  //create prop and use the information in data.js to properly reference the correct values
  const cards = data.map(item => {
    return (
      <Card 
      //key prop needed as a unique identifier such as an id
          key = {item.id}
          //using item instead of creating a new line for each property
          item={item}
          //could also use spread operator to split each property of item as below and have it function the same as listing each property out such as img=item.coverImg
          //item={...item}
        />
    )
  })
  return (
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
      </div>
  )
}