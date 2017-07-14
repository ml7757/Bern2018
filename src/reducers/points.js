// src/reducers/points.js

import { FETCHED_POIS } from '../actions/points/fetch-pois'
import { POI_CREATED } from '../actions/points/create-poi'
import { POI_UPDATED } from '../actions/points/edit-poi'
import { POI_REMOVED } from '../actions/points/remove-poi'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_POIS :
      return [].concat(payload)

    case POI_CREATED :
      return [].concat(payload)

    case POI_UPDATED :
      return [].concat(payload)

    case POI_REMOVED :
        return [].concat(payload)

    default :
      return state
  }
}
