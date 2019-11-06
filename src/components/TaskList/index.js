import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import TaskList from './TaskList'
import * as taskActions from '../../store/actions/task'
import PNotify from 'pnotify/dist/es/PNotify'
PNotify.defaults.styling = 'bootstrap4'

class TaskListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    const { taskActions } = this.props
    const id = localStorage.getItem('id')
    taskActions.get(id)
  }
  
  render() {
    return (
      <TaskList 
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskListContainer))