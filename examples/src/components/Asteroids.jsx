import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchAsteroids } from '../slices/asteroids/asteroidsSlice'

const Asteroids = () => {
  const dispatch = useDispatch()
  const asteroids = useSelector(state => state.asteroids)

  useEffect(() => {
    dispatch(fetchAsteroids())
  }, [])

  return (
    <div>
      <ul>
        {
          asteroids.map((asteroid, index) =>
            <li key={index} style={{
              color: asteroid.warning ? "red": "black"
            }}>{asteroid.name}</li>
          )
        }
      </ul>
    </div>
  )
}

export default Asteroids
