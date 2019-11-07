import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Header({ signOut }) {
  return (
    <div className="header">
      <span
        className="btn btn-warning m-1"
        onClick={() => signOut()}
      >
        <Link to="/">
          <span className="text-dark">LOG OUT</span>
        </Link>
      </span>
    </div>
  )
}

export default Header
