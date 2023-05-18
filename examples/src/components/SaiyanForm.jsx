import { useState } from 'react'
import { connect } from 'react-redux'
import { addSaiyan } from "../actions/characters"

const SaiyanForm = ({dispatch}) => {
  const [name, setName] = useState("")

  return (
    <div>
      <p>Nombre:
        <input type="text" onChange={e => setName(e.target.value)} />
      </p>

      <button onClick={() => dispatch(addSaiyan(name))}>Añadir nuevo</button>
    </div>
  )
}

// Redux State Mapping
const mapStateToProps = (state) => ({
  saiyans: state
})

// Redux Connection
export default connect(mapStateToProps)(SaiyanForm)