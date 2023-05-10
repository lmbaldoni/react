// Imports
import { useState } from "react";
import "./App.css"
import dbImg from "./assets/images/dragon-ball.jpg"

import CharactersList from "./components/CharacterList"

// Function
const App = () => {
  const [characters, setCharacters] = useState([
    {
      name: "Goku",
      race: "supersaiyan"
    },
    {
      name: "Bulma",
      race: ""
    },
    {
      name: "Vegeta",
      race: "supersaiyan"
    },
    {
      name: "Gohan",
      race: "supersaiyan"
    },
    {
      name: "Ginyu",
      race: ""
    }
  ])
  let [maximum, setMaximum] = useState(0)
  
  const increaseMaximum = () => setMaximum(maximum+1)
  
  // Initialize data
  const titleApp = "Feliz Día de Goku"

  return (
    <div>
      <h1>{titleApp}</h1>
      <img className="poster" src={dbImg} alt="Imagen de Goku" />

      <p>{maximum}</p>
      <button onClick={increaseMaximum}>Incrementar</button>

      <CharactersList dataChars={{characters, setCharacters}} maximum={maximum}/>
    </div>
  )
}

// Exports
export default App