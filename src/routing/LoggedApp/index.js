import React, { Component } from 'react'

import {
  Switch,
  Route,
} from 'react-router-dom'

import TaskList from '../../components/TaskList'
import Task from '../../components/Task'

class LoggedApp extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TaskList} />
        <Route exact path="/task" component={Task} />
        <Route exact path="/task/:id" component={Task} />
      </Switch>
    )
  }
}

export default LoggedApp
