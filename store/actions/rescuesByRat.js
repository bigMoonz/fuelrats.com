// Module imports
import fetch from 'isomorphic-fetch'





// Component imports
import actionTypes from '../actionTypes'





export const getRescuesByRatStatistics = () => async dispatch => {
  dispatch({ type: actionTypes.GET_RESCUES_BY_RAT })

  try {
    let response = await fetch('/api/statistics/rats')

    response = await response.json()

    dispatch({
      payload: response,
      status: 'success',
      type: actionTypes.GET_RESCUES_BY_RAT,
    })
  } catch (error) {
    dispatch({
      status: 'error',
      type: actionTypes.GET_RESCUES_BY_RAT,
    })
  }
}
