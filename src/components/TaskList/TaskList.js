import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import Header from '../Header'
import './style.css'
import ShortList from './ShortList'
import DetailedList from './DetailedList'
import ScrumBoard from './ScrumBoard'

class TaskList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 'short'
    }
  }

  renderDataTable = (tasks) => {
    switch (this.state.view) {
      case 'detailed': {
        return <DetailedList
          tasks={tasks}
        />
      }
      case 'scrum': {
        return <ScrumBoard
          tasks={tasks}
        />
      }
      default: {
        return <ShortList
          tasks={tasks}
        />
      }
    }
  }

  changeView = (viewType) => {
    this.setState({ view: viewType })
  }

  render() {
    const { tasks } = this.props
    return (
      <Fragment>
        <Header />
        {_.size(tasks) === 0
          ?
          <div>
            <center>
              <span>
                There is no tasks, yet!
                </span>
            </center>
          </div>
          :
          <div>
            <div className="ml-3 mt-3">
              <span
                className="mr-1"
              >
                Select view:
                </span>
              <span
                className="link mr-1"
                onClick={() => { this.changeView('short') }}
              >
                Short List |
                </span>
              <span
                className="link mr-1"
                onClick={() => { this.changeView('detailed') }}
              >
                Detailed List |
                </span>
              <span
                className="link"
                onClick={() => { this.changeView('scrum') }}
              >
                Scrum Board
                </span>
            </div>

            {this.renderDataTable(tasks)}
          </div>
        }
        <center>
          <div>
            <Link to="/task"
              className="btn btn-primary"
            >
              Add New Task
            </Link>
          </div>
        </center>
      </Fragment>
    )
  }
}

export default TaskList
