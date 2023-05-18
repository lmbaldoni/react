import { useEffect } from "react"
import Character from "./Character"

import { connect } from 'react-redux'
import { getSaiyans } from "../actions/characters"
import SaiyanForm from "./SaiyanForm"

const SaiyanList = ({dispatch, saiyans}) => {

  // --------- Get only saiyans from Redux ---------
  useEffect(() => {
    dispatch(getSaiyans())
  }, [dispatch])

  return (
    <div>
      <ul>
        {
          saiyans.map((character, index) =>
            <Character charData={character} key={index} />
          )
        }
      </ul>

      <SaiyanForm />
    </div>
  )
}

// Redux State Mapping
const mapStateToProps = (state) => ({
  saiyans: state
})

// Redux Connection
export default connect(mapStateToProps)(SaiyanList)