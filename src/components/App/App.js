import React from 'react'
import LoggedApp from '../../routing/LoggedApp'
import NotLoggedApp from '../../routing/NotLoggedUp'

function App() {
  const token = localStorage.getItem('token') || ''
  return (
    <div>
      {token
        ? <LoggedApp />
        : <NotLoggedApp />
      }
    </div>
  )
}

export default App
