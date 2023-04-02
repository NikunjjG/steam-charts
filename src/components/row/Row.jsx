import React from 'react'
import './Row.scss'

export default function Row(props) {
  return (
    <div className='row'>
        <div className="container">
            <div className="left"><span>{props.username}</span></div>
            <div className="centre"><span>{props.name}</span></div>
            <div className="right">{props.email}</div>
        </div>
    </div>
  )
}
