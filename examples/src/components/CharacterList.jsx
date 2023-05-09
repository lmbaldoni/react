const CharactersList = ({characters, maximum}) => {
  
  return (
    <div>
      <ul>
        {
          /*
          characters.map(character => {
            return (
              <p>{character}</p>
            )
          })
          */
          characters.map((character, index) =>
            <li className={character.race} key={index}>{character.name}</li>
          )
        }
      </ul>

      <p>{maximum}</p>
    </div>
    
  )
}

export default CharactersList
