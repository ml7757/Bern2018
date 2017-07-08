import { history } from '../../store'
import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const GUEST_REMOVED = "GUEST_REMOVED"

const api = new API()

export default (guestId) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    const backend = api.service('guests')

    api.app.authenticate()
      .then(() => {

        backend.remove(guestId)
          .then((result) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({ type: LOAD_SUCCESS })

            dispatch({
              type: GUEST_REMOVED,
              payload: result
            })

            history.replace('/admin')

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
