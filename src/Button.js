import React from 'react'

const Button = (props) => {
  return (
    <button className="menuButton" onClick={props.action}>{props.name}</button>
  )
}

export default Button
