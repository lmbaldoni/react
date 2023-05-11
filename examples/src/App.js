// Imports
import { useEffect, useState } from "react";
import "./App.css"
import dbImg from "./assets/images/dragon-ball.jpg"

import CharactersList from "./components/CharacterList"

/*
[
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
  ]
*/

// Function
const App = () => {
  const [characters, setCharacters] = useState([])
  let [maximum, setMaximum] = useState(0)
  
  const increaseMaximum = () => setMaximum(maximum+1)
  
  // Initialize data
  const titleApp = "Feliz Día de Goku"

  // Side effect
  useEffect(() => {

    // Retrieve data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        const dataFormatted = data.map(person => {
          return {
            name: person.name,
            race: person.id % 2 === 0 ? "supersaiyan": "human"
          }
        })

        setCharacters(dataFormatted)
      })

  }, []) // <---------- First render
  
  return (
    <div>
      {/* <h1>{titleApp}</h1>
      <img className="poster" src={dbImg} alt="Imagen de Goku" />

      <p>{maximum}</p>
      <button onClick={increaseMaximum}>Incrementar</button> */}

      <CharactersList dataChars={{characters, setCharacters}} maximum={maximum}/>
    </div>
  )
}

// Exports
export default App