import React from 'react'
import './style.css'

function Header({ signOut }) {
  return (
    <div className="header">
      <button
        className="btn btn-warning m-1"
        onClick={() => signOut()}
      >
        <span>LOG OUT</span>
      </button>
    </div>
  )
}

export default Header
