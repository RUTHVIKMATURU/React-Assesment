import React from 'react'
import './User.css'
function User(props) {
  return (
    <div className='userblock display-3 m-3 p-3 rounded-2'>
      <div className="head text-center">
      <img src={props.user.image} alt="" />
      <h3>{props.user.username}</h3>
      </div>
      <a href="mailto:" className='fs-6'>{props.user.email} </a>
      <h5>{props.user.firstName} {props.user.lastName} </h5>
      <h5>{props.user.gender}</h5>
    </div>
  )
}

export default User