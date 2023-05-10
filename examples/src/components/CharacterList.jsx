import { useState } from "react"
import Character from "./Character"

const CharactersList = ({dataChars, maximum}) => {

  const [name, setName] = useState("")
  const [race, setRace] = useState("")

  const addCharacter = () =>
    dataChars.setCharacters([...dataChars.characters, { name, race }])

  const handlerName = event => setName(event.target.value)
  const handlerRace = event => setRace(event.target.value)

  const seePosition = index => alert(dataChars.characters[index].name)

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

      <ul>
        {
          dataChars
            .characters
            .map((character, index) =>
              <Character charData={character} key={index} />
            )
        }
      </ul>
    </div>
  )
}

export default CharactersList