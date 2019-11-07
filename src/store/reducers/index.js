import { combineReducers } from 'redux'
import authRedusers from './auth'
import userRedusers from './user'
import taskRedusers from './task'
import { routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
  routing: routerReducer,
  auth: authRedusers,
  user: userRedusers,
  task: taskRedusers
})

export default allReducers