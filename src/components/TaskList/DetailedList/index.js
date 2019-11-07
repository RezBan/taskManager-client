import React, { Component } from 'react'
import _ from 'lodash'

import DetailedList from './DetailedList'

class DetailedListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      priority: true,
      status: true,
      sortBy: ''
    }
  }

  sortBy = (arg) => {
    this.setState({
      [arg]: !this.state[arg],
      sortBy: arg
    })
  }

  render() {
    const { tasks } = this.props
    const arg = this.state.sortBy
    const sortedList = _.orderBy(tasks, arg, this.state[arg] ? 'desc' : 'asc')
    return (
      <DetailedList
        tasks={sortedList}
        priority={this.state.priority}
        status={this.state.status}
        sortBy={this.sortBy}
      />
    )
  }
}


export default DetailedListContainer
