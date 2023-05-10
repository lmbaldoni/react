const Character = ({charData}) => {
  return (
    <li className={charData.race}>{charData.name}</li>
  )
}

export default Character
