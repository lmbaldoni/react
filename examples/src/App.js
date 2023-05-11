// Imports
import { useEffect, useState } from "react";
import "./App.css"

import Header from "./components/Header"
import CharacterList from "./components/CharacterList"

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
      <Header
        titleApp={titleApp}
        maximum={maximum}
        increaseMaximum={increaseMaximum}
      />

      <hr />

      <CharacterList
        dataChars={{characters, setCharacters}} 
        maximum={maximum}
      />
    </div>
  )
}

// Exports
export default App