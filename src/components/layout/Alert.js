import React from 'react'

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className = {`alert alert-${alert.type}`}>
        {alert.message}
      </div>
    )
  )
}

export default Alert;
