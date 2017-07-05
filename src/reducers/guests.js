// src/reducers/guests.js

import { FETCHED_GUESTS } from '../actions/guests/fetch'
import { GUEST_CREATED } from '../actions/guests/create-guest'
import { GUEST_UPDATED } from '../actions/guests/edit-guest'
import { GUEST_REMOVED } from from '../actions/guests/remove-guest'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_GUESTS :
      return [ ...payload ]

    case GUEST_CREATED :
      return [].concat(payload)

    case GUEST_UPDATED :
      return state.map((guest) => {
        if (guest._id === payload._id) {
          return { ...payload }
        }
        return guest
      })

    case GUEST_REMOVED :
        return state.filter((guest) => (guest._id !== payload._id))

    default :
      return state
  }
}
