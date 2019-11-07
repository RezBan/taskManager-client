import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Auth from './Auth'
import * as authActions from '../../store/actions/auth'
import * as userActions from '../../store/actions/user'
import PNotify from 'pnotify/dist/es/PNotify'
PNotify.defaults.styling = 'bootstrap4'

class AuthContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: true,
      email: '',
      password: ''
    }
  }

  handleChange = (e, type) => {
    this.setState({ [type]: e.target.value })
  }

  toggleLogin = (value) => {
    this.setState({ isLogin: value })
  }

  isFieldValid = (field, fieldName) => {
    if (field === '') {
      let notice = PNotify.error({
        title: 'Error',
        text: `${fieldName} field cannot be empty`,
        modules: {
          Buttons: {
            closer: false,
            sticker: false
          }
        }
      })
      notice.on('click', function () {
        notice.close()
      })
      return false
    }
    return true
  }

  signIn = () => {
    const { email, password } = this.state
    const { authActions } = this.props
    if (this.isFieldValid(email, 'Email')
      && this.isFieldValid(password, 'Password')
    ) {
      authActions.post({ email, password })
    }
  }

  signUp = () => {
    const { email, password } = this.state
    const { userActions } = this.props
    if (this.isFieldValid(email, 'Email')
      && this.isFieldValid(password, 'Password')
    ) {
      userActions.post({ email, password })
    }
  }

  render() {
    return (
      <Auth
        state={this.state}
        handleChange={this.handleChange}
        toggleLogin={this.toggleLogin}
        signIn={this.signIn}
        signUp={this.signUp}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthContainer))
