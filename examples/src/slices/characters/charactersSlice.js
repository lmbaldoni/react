import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  characters: []
}

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharacters: state => state.characters,
    addCharacter: (state, action) => {
      state.characters.push(action.payload)
    }
  }
})

export const {
  getCharacters,
  addCharacter
} = charactersSlice.actions

export default charactersSlice.reducer