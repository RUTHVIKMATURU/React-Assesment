import React from 'react'
import './Apiuser.css'
function Apiuser(props) {
  return (
    <div className='apiuser'>
      <img src={props.element.avatar} alt=""/>
      <h4 className='fs-5'>{props.element.first_name} {props.element.last_name}</h4>
      <a href="mailto:" className='fs-5'> {props.element.email} </a>
    </div>
  )
}
export default Apiuser