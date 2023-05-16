import { useState, useEffect, useContext } from "react"
import Character from "./Character"
import CharacterForm from "./CharacterForm"

import AddCharacterContext from "../contexts/AddCharacterContext";

const CharacterList = () => {

  const {characters} = useContext(AddCharacterContext)
  
  // --------- Component states ---------

  const [search, setSearch] = useState("")
  const [totalSaiyans, setTotalSaiyans] = useState(0)

  // --------- Event handler functions ---------

  const handlerSearch = event => setSearch(event.target.value)

  // --------- Side effects ---------
  
  useEffect(() => {
    const ts = characters
                  .reduce((total, character) => {
                    if(character.race === "supersaiyan")
                      return total + 1
                    else
                      return total
                  }, 0)
                  
    setTotalSaiyans(ts)
  }, [characters])
  
  // --------- Render ---------
  
  return (
    <div>
      <CharacterForm />

      <hr />

      {
        characters.length > 0
        ?
          <div>
            <p>Filtrar por: <input type="text" onChange={handlerSearch} /></p>

            <ul>
              {
                characters
                  .filter(character =>
                    character.name.length > 0 &&
                    character.name.startsWith(search)
                  )
                  .map((character, index) =>
                    <Character charData={character} key={index} />
                  )
              }
            </ul>

            <p>Total: {totalSaiyans}</p>
          </div>
        :
          <p>No hay personajes cargados</p>
      }
    </div>
  )
}

export default CharacterList