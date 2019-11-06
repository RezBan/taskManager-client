import types from '../constants/task'

export default (state = {}, action) => {
  switch (action.type) {
    case types.GET: {
      return {
        ...state,
      }
    }

    case types.GET_SUCCESS: {
      const data = action.payload
      return {
        ...state,
        tasks: data,
      }
    }

    case types.GET_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }

    case types.GET_ID: {
      return {
        ...state,
      }
    }

    case types.GET_ID_SUCCESS: {
      const data = action.payload
      return {
        ...state,
        task: data,
      }
    }

    case types.GET_ID_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }

    case types.POST: {
      return {
        ...state,
      }
    }

    case types.POST_SUCCESS: {
      const data = action.payload
      return {
        ...state,
        task: data,
      }
    }

    case types.POST_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }

    case types.UPDATE: {
      return {
        ...state,
      }
    }

    case types.UPDATE_SUCCESS: {
      const data = action.payload
      return {
        ...state,
        task: data,
      }
    }

    case types.UPDATE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }
    
    default:
      return state
  }
}