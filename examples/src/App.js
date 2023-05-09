// Imports
import "./App.css"
import dbImg from "./assets/images/dragon-ball.jpg"

import CharactersList from "./components/CharacterList"

// Function
const App = () => {
  
  // Initialize data
  const titleApp = "Feliz Día de Goku"

  const characters = [
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
    }
  ]

  return (
    <div>
      <h1>{titleApp}</h1>

      <img className="poster" src={dbImg} alt="Imagen de Goku" />

      <CharactersList characters={characters} />
    </div>
  )
}

// Exports
export default App