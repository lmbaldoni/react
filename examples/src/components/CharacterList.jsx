import { useState, useEffect } from "react"
import Character from "./Character"
import CharacterForm from "./CharacterForm"

const CharacterList = ({dataChars, maximum}) => {
  
  // --------- Component states ---------

  const [name, setName] = useState("")
  const [race, setRace] = useState("")
  const [search, setSearch] = useState("")
  const [totalSaiyans, setTotalSaiyans] = useState(0)

  // --------- Event handler functions ---------
  
  const addCharacter = () =>
    dataChars.setCharacters([...dataChars.characters, { name, race }])

  const handlerName = event => setName(event.target.value)
  const handlerRace = event => setRace(event.target.value)
  const handlerSearch = event => setSearch(event.target.value)
  
  // --------- Side effects ---------
  
  useEffect(() => {
    const ts = dataChars
                  .characters
                  .reduce((total, character) => {
                    if(character.race === "supersaiyan")
                      return total + 1
                    else
                      return total
                  }, 0)
                  
    setTotalSaiyans(ts)
  }, [dataChars])
  
  // --------- Render ---------
  
  return (
    <div>
      <CharacterForm
        handlerName={handlerName}
        handlerRace={handlerRace}
        addCharacter={addCharacter}
      />

      <hr />

      {
        dataChars.characters.length > 0
        ?
          <div>
            <p>Filtrar por: <input type="text" onChange={handlerSearch} /></p>

            <ul>
              {
                dataChars
                  .characters
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