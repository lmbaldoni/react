// Action creators (factory)
export const getSaiyans = () => {
  return { type: "GET_SAIYANS" }
}

export const addCharacter = (payload) => {
  return { type: "GET_CHARACTER", payload }
}