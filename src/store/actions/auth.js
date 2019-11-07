import types from '../constants/auth'

export const post = (data) => {
  return {
    type: types.POST,
    payload: data
  }
}

export const postSuccess = ({ data }) => (
  {
    type: types.POST_SUCCESS,
    payload: data,
  })

export const postFailure = error => ({
  type: types.POST_FAILURE,
  payload: error,
})