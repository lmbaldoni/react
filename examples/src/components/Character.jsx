import { useState, useEffect } from "react"
import "./Character.scss"

const Character = ({charData}) => {

  const [myColor, setMyColor] = useState("black")

  useEffect(() => {
    setMyColor(charData.id % 2 === 0 ? "yellow" : "black")
  }, [charData])
  
  return (
    <li className={`character ${myColor}`}>{charData.name}</li>

    // <li style={{color: myColor}}>{charData.name}</li>
  )
}

export default Character