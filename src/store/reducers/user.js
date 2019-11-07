import types from '../constants/user'

export default (state = {}, action) => {
  switch (action.type) {
    case types.POST: {
      return {
        ...state,
      }
    }

    case types.POST_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      }
    }

    case types.POST_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }

    default:
      return state
  }
}