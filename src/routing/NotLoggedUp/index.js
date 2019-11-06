import React, { Component } from 'react'

import {
  Switch,
  Route,
} from 'react-router-dom'

import Auth from '../../components/Auth'
 
class Notlogged extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Auth} />
      </Switch>
    )
  }

}

export default Notlogged