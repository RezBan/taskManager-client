import { put, takeLatest } from 'redux-saga/effects'
import * as authActions from '../actions/auth'
import _ from 'lodash'
import types from '../constants/auth'
import axios from "axios"
import PNotify from 'pnotify/dist/es/PNotify'
PNotify.defaults.styling = 'bootstrap4'



function* post(data) {
  try {
    const response = yield axios.post(
      `http://localhost:8000/auth`,
      data.payload
    )
    if (_.size(response)) {
      yield put({ type: types.POST_SUCCESS, payload: response.data})
    }
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('id', response.data.userId)
    window.location.reload('true')
  } catch (e) {
    yield put(authActions.postFailure(e))
    let notice = PNotify.error({
      title: 'Authorization error',
      text: `Please check email and password`,
      modules: {
        Buttons: {
          closer: false,
          sticker: false
        }
      }
    })
    notice.on('click', function() {
      notice.close()
    })
  }
}

export default function* authSaga() {
  yield takeLatest(types.POST, post)
}