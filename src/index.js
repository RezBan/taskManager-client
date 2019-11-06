import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, applyMiddleware } from 'redux'
import allRedusers from './store/reducers'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'

import App from './components/App/App'

import rootSaga from './store/sagas'

const sagaMiddleware = createSagaMiddleware()
const history = createBrowserHistory()

const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
]

const store = applyMiddleware(...middleware)(createStore)(
  allRedusers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

export {
  store,
  history,
}