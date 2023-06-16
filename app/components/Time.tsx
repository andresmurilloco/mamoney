import React from 'react'

const Time = () => {
    const today = new Date();
  return (
    <div>{today.toDateString()}</div>
  )
}

export default Time