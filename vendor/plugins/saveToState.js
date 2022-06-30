import state from '../state/state.js'

function SaveToState(name, value) {
  state[name] = value

  return state
}

export default SaveToState