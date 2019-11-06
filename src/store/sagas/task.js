import { put, takeLatest } from 'redux-saga/effects'
import * as taskActions from '../actions/task'
import _ from 'lodash'
import types from '../constants/task'
import axios from "axios"
import PNotify from 'pnotify/dist/es/PNotify'
PNotify.defaults.styling = 'bootstrap4'



function* get(data) {
  try {
    const response = yield axios.get(
      `http://localhost:8000/task`,
      {
        params: {owner: data.payload}
      }
    )
    if (_.size(response)) {
      yield put({ type: types.GET_SUCCESS, payload: response.data})
    }
  } catch (e) {
    yield put(taskActions.getFailure(e))
    let notice = PNotify.error({
      title: 'Get tasks error',
      text: `Please check connection to server`,
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

function* getId(data) {
  try {
    const response = yield axios.get(
      `http://localhost:8000/task/${data.payload}`,
    )
    if (_.size(response)) {
      yield put({ type: types.GET_ID_SUCCESS, payload: response.data})
    }
  } catch (e) {
    yield put(taskActions.getIdFailure(e))
    let notice = PNotify.error({
      title: 'Get task error',
      text: `Please check connection to server`,
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

function* post(data) {
  console.log(data.payload)
  try {
    const response = yield axios.post(
      `http://localhost:8000/task/`,
      data.payload
    )
    if (_.size(response)) {
      yield put({ type: types.POST_SUCCESS, payload: response.data})
      let notice = PNotify.success({
        title: 'Congratulations!',
        text: 'New task was saved.\nTip: You can create new task or go back to Task list.',
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
    yield put(taskActions.postFailure(e))
    let notice = PNotify.error({
      title: 'Post task error',
      text: `Please check connection to server`,
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

function* update(data) {
  try {
    const response = yield axios.put(
      `http://localhost:8000/task/${data.payload.taskId}`,
      data.payload
    )
    if (_.size(response)) {
      yield put({ type: types.UPDATE_SUCCESS, payload: response.data})
      let notice = PNotify.success({
        title: 'Congratulations!',
        text: 'This task was updated.\nTip: You can update it again or go back to Task list.',
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
    yield put(taskActions.updateFailure(e))
    let notice = PNotify.error({
      title: 'Get task error',
      text: `Please check connection to server`,
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

export default function* taskSaga() {
  yield takeLatest(types.GET, get)
  yield takeLatest(types.GET_ID, getId)
  yield takeLatest(types.POST, post)
  yield takeLatest(types.UPDATE, update)
}