import API from '../../api'
import { history } from '../../store'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const POI_REMOVED = 'POI_REMOVED'

const api = new API()

export default (poi) => {
  return (dispatch) => {

  dispatch({ type: APP_LOADING })

   const backend = api.service('points')

   backend.remove(poi)
     .then((result) => {
       dispatch({ type: LOAD_SUCCESS })
       dispatch({ type: APP_DONE_LOADING })

       dispatch({
         type: POI_REMOVED,
         payload: result
       })

       history.replace(`/admin`)
     })
     .catch((error) => {
       dispatch({ type: APP_DONE_LOADING })
       dispatch({
         type: LOAD_ERROR,
         payload: error.message
       })
     })
  }
}
