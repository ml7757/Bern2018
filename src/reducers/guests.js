import { ADD_GUEST } from '../actions/guests/create-guest'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case ADD_GUEST :
      return [].concat(payload)

    default :
      return state
  }
}
