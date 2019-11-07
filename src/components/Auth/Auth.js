import React from 'react'
import './style.css'

function Auth({
  state,
  handleChange,
  toggleLogin,
  signIn,
  signUp
}) {
  return (
    <div className="container">
      <div className="selector">
        <span className="text-muted">Click here to </span>
        {state.isLogin
          ? <span className="text-warning link" onClick={() => toggleLogin(false)}>Sign Up</span>
          : <span className="text-primary link" onClick={() => toggleLogin(true)}>Sign In</span>
        }
      </div>
      <div className="login-form">
        <div>
          <div className="form-group">
            <label htmlFor="emailInput">Email address</label>
            <input
              type="email"
              className="form-control text-center"
              id="emailInput"
              placeholder="Enter email"
              value={state.email}
              onChange={e => handleChange(e, 'email')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              type="password"
              className="form-control text-center"
              id="passwordInput"
              placeholder="Password"
              value={state.password}
              onChange={e => handleChange(e, 'password')}
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary"
            >
              {state.isLogin
                ? <span onClick={() => signIn()}>Sign In</span>
                : <span onClick={() => signUp()}>Sign Up</span>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
