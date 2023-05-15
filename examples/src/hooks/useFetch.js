import { useState } from "react";

const useFetch = (url, callbackFunction) => {
  const [limit, setLimit] = useState(3)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      callbackFunction()
    })
    .catch(() => {
      setLimit(limit-1)

      // Volver a pedir datos
    })
}

export default useFetch