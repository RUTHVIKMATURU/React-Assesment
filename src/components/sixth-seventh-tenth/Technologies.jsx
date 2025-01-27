import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Technologies() {
  return (
    <div className='container'>
      <ul className='nav justify-content-around mt-5'>
        <li  className='nav-item bg-primary p-2 rounded-2'>
          <Link to='vue' style={{ textDecoration: 'none', color:'white' }}>Vue</Link>
        </li>
        <li  className="nav-item bg-primary p-2 rounded-2">
          <Link to='nodejs' style={{ textDecoration: 'none',color:'white' }}>nodejs</Link>
        </li>
        <li  className='nav-item bg-primary p-2 rounded-2'>
          <Link to='express' style={{ textDecoration: 'none',color:'white'}}>express</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Technologies