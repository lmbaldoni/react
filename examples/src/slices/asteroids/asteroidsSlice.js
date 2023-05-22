import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  asteroids: []
}

const asteroidsSlice = createSlice({
  name: "asteroids",
  initialState,
  reducers: {
    getAsteroids: state => state.asteroids,
    addAsteroid: (state, action) => {
      state.asteroids.push(action.payload)
    }
  }
})

export const {
  getAsteroids,
  addAsteroid
} = asteroidsSlice.actions

export default asteroidsSlice.reducer