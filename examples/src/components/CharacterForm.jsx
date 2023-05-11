const CharacterForm = ({handlerName, handlerRace, addCharacter}) => {
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
    </div>
  )
}

export default CharacterForm