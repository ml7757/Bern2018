// src/reducers/points.js

import { FETCHED_POIS } from '../actions/points/fetch'
import { POI_CREATED } from '../actions/points/create-poi'
import { POI_UPDATED } from '../actions/points/edit-poi'
import { POI_REMOVED } from '../actions/points/remove-poi'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_POIS :
      return [ ...payload ]

    case POI_CREATED :
      return [].concat(payload)

    case POI_UPDATED :
      return state.map((poi) => {
        if (poi._id === payload._id) {
          return { ...payload }
        }
        return poi
      })

    case POI_REMOVED :
        return state.filter((poi) => (poi._id !== payload._id))

    default :
      return state
  }
}
