const Character = ({charData}) =>
  <li className={charData.race}>{charData.name}</li>

export default Character