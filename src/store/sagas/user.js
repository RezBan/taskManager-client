import { put, takeLatest } from 'redux-saga/effects'
import * as userActions from '../actions/user'
import _ from 'lodash'
import types from '../constants/user'
import axios from "axios"
import PNotify from 'pnotify/dist/es/PNotify'
PNotify.defaults.styling = 'bootstrap4'



function* post(data) {
  try {
    const response = yield axios.post(
      `http://localhost:8000/user`,
      data.payload
    )
    if (_.size(response)) {
      yield put({ type: types.POST_SUCCESS, payload: response.data})
      let notice = PNotify.success({
        title: 'Congratulations!',
        text: `New user was added.\n Tip: now you can sign in.`,
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
  } catch (e) {
    yield put(userActions.postFailure(e))
    let notice = PNotify.error({
      title: 'Registration error',
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

export default function* userSaga() {
  yield takeLatest(types.POST, post)
}