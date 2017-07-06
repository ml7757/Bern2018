import { history } from '../../store'
import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const POI_UPDATED = "POI_UPDATED"

const api = new API()

export default (points) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    const backend = api.service('points')

    api.app.authenticate()
      .then(() => {

        backend.patch(points)
          .then((result) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({ type: LOAD_SUCCESS })

            dispatch({
              type: POI_UPDATED,
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
