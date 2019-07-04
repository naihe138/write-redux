import redux from '../redux'
import reducer from './reducer'
const createStore = redux.createStore

let initState = {
  count: 0
}

export default createStore(reducer, initState)
