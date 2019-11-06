import types from '../constants/task'

export const get = (data) => {
  return {
    type: types.GET,
    payload: data
  }
}

export const getSuccess = ({ data }) => (
  {
  type: types.GET_SUCCESS,
  payload: data,
})

export const getFailure = error => ({
  type: types.GET_FAILURE,
  payload: error,
})

export const getId = (data) => {
  return {
    type: types.GET_ID,
    payload: data
  }
}

export const getIdSuccess = ({ data }) => (
  {
  type: types.GET_ID_SUCCESS,
  payload: data,
})

export const getIdFailure = error => ({
  type: types.GET_ID_FAILURE,
  payload: error,
})

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

export const update = (data) => {
  return {
    type: types.UPDATE,
    payload: data
  }
}

export const updateSuccess = ({ data }) => (
  {
  type: types.UPDATE_SUCCESS,
  payload: data,
})

export const updateFailure = error => ({
  type: types.UPDATE_FAILURE,
  payload: error,
})