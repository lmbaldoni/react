import { useState, useEffect } from "react"
import Character from "./Character"

const CharactersList = ({dataChars, maximum}) => {

  const [name, setName] = useState("")
  const [race, setRace] = useState("")
  const [search, setSearch] = useState("")
  const [totalSaiyans, setTotalSaiyans] = useState(0)

  const addCharacter = () =>
    dataChars.setCharacters([...dataChars.characters, { name, race }])

  const handlerName = event => setName(event.target.value)
  const handlerRace = event => setRace(event.target.value)
  const handlerSearch = event => setSearch(event.target.value)

  const seePosition = index => alert(dataChars.characters[index].name)
  
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
  
  return (
    <div>
      <div>
        <p>Nombre: <input type="text" onChange={handlerName} /></p>
        <p>
          Raza:
          <select id="raceChar" onChange={handlerRace}>
            <option value="">Humano</option>
            <option value="supersaiyan">Supersaiyan</option>
            <option value="namekiano">Namekiano</option>
          </select>
        </p>
      </div>

      <button onClick={addCharacter}>Añadir nuevo</button>
      <button onClick={() => seePosition(maximum)}>Alerta del maximum</button>

      {/* ------------------------------------------------- */}

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

export default CharactersList
