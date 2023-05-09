const CharactersList = ({characters}) => {
  return (
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
  )
}

export default CharactersList
