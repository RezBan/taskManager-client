import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Header from './Header'

class HeaderContainer extends Component {
  signOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location.reload(true)
  }

  render() {
    return (
      <Header
        signOut={this.signOut}
      />
    )
  }
}

export default withRouter(HeaderContainer)
