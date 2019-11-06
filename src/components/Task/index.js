import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import _ from 'lodash'
import Task from './Task'
import * as taskActions from '../../store/actions/task'
import { fieldNames } from '../../helpers/constants'
import PNotify from 'pnotify/dist/es/PNotify'
PNotify.defaults.styling = 'bootstrap4'

class TaskContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: {
        taskName: '',
        priority: 0,
        status: 0,
        plainTime: '',
        spendTime: '',
        description: '',
      },
      isShow: false,
      isUpdate: false
    }
  }

  componentDidMount() {
    const { taskActions } = this.props
    const id = window.location.pathname.substring(6) || ''

    if (id !== '') {
      taskActions.getId(id)
      this.setState({ isShow: true, isUpdate: true })
    }
  }

  handleChangeNumber = (e, name) => {
    const regExp = /[^\d.,]/g
    const value = e.target.value
    let changedValue = value.replace(regExp, '')
    if (value < 0) {
      changedValue = 0
      return changedValue
    }
    const task = {...this.state.task}
    task[name] = changedValue
    this.setState({ task })
  }

  handleChange = (e, name) => {
    const task = {...this.state.task}
    task[name] = e.target.value
    this.setState({ task })
  }

  handleSelect = (value, name) => {
    const task = {...this.state.task}
    task[name] = value
    this.setState({ task })
  }

  changeMode = () => {
    const { task } = this.props
    this.setState({ task: task, isShow: !this.state.isShow })
  }

  isValid = (obj) => {
    let field
    let result = true
    _.map(obj, (item, i) => {
      if (item === '') {
        field = _.find(fieldNames, { 'value': i })
        let notice = PNotify.error({
          title: `Field "${field.name}" can not be empty`,
          text: `Please fill "${field.name}" field`,
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
        result = false
        return result
      }
    })

    if (obj.plainTime.length < 5) {
      let notice = PNotify.error({
        title: `Field "Plain time" must have 5 numbers`,
        text: `Please fill "Plain time" field correct (999h 99min)`,
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
      result = false
      return result
    } else if (obj.spendTime.length < 5) {
      let notice = PNotify.error({
        title: `Field "Spend time" must have 5 numbers`,
        text: `Please fill "Spend time" field correct (000h 00min)`,
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
      result = false
      return result
    }
    return result
  }

  savePayment = () => {
    const { taskActions } = this.props
    const { task } = this.state
    const userId = localStorage.getItem('id')

    if (this.isValid(task)) {
      const taskData = {
        user: userId,
        ...task
      }
      taskActions.post({ ...taskData })
      this.setState({ task: {
        taskName: '',
        priority: 0,
        status: 0,
        plainTime: '',
        spendTime: '',
        description: '',
      }})
    }
  }

    updatePayment = () => {
      const { taskActions } = this.props
      const { task } = this.state
      const userId = localStorage.getItem('id')
      const taskId = this.props.task.id
      if (this.isValid(task)) {
        const taskData = {
          taskId,
          user: userId,
          ...task
        }
        taskActions.update({ ...taskData })
      }
    }
  
  render() {
    const id = window.location.pathname.substring(6) || ''
    const task = id && this.state.isShow ? this.props.task : this.state.task
    return (
      <Task 
        task={task || this.state.task}
        handleChange={this.handleChange}
        handleChangeNumber={this.handleChangeNumber}
        handleSelect={this.handleSelect}
        savePayment={this.savePayment}
        updatePayment={this.updatePayment}
        isUpdate={this.state.isUpdate}
        isShow={this.state.isShow}
        changeMode={this.changeMode}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    task: state.task.task
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskContainer))