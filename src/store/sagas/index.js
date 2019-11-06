import { all } from 'redux-saga/effects'
import authSaga from './auth'
import userSaga from './user'
import taskSaga from './task'


export default function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    taskSaga()
  ])
}