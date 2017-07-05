// src/actions/guests/fetch.js

import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const FETCHED_GUESTS = 'FETCHED_GUESTS'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    const backend = api.service('guests')

    api.app.authenticate()
      .then(() => {
        backend.find()
          .then((result) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({ type: LOAD_SUCCESS })

            dispatch({
              type: FETCHED_GUESTS,
              payload: result.data
            })
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
        backend.find()
          .then((result) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({ type: LOAD_SUCCESS })

            dispatch({
              type: FETCHED_GUESTS,
              payload: result.data
            })
          })
          .catch((error) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            })
          })
      })

  }
}
