import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const dataFormatted = data.map(person => {
          return {
            name: person.name,
            race: person.id % 2 === 0 ? "supersaiyan": "human"
          }
        })

        setCharacters(dataFormatted)
      })
  }, [url])

  return [characters, setCharacters]
}

export default useFetch;