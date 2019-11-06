import React from 'react'

function MasckedView({value}) {
  const hours = value.substr(-5, 3)
  const minutes = value.substr(3, 2)
  return (
    <span>
      {`${hours}h ${minutes}min`}
    </span>
  )
}

export default MasckedView