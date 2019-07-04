
import * as types from './action-types'

export default function reducer(state, action){
  switch(action.type){
    case types.INCREMENT:
      return { count: state.count + 1 }
    case types.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}
