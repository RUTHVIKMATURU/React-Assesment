import React from 'react'
import { Link } from 'react-router-dom'
import { logincontextobj } from '../../contexts/LoginContext'
import { useContext } from 'react'
function Header() {
  const {loginstatus,currentUser,onuserlogout}=useContext(logincontextobj);
  return (
    <div>
        <ul className="nav bg-dark fs-5 justify-content-end">
        {
          loginstatus===false?(<>
            <li className="nav-item">
              <Link to="" className='nav-link text-light'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="login" className='nav-link text-light'>Login</Link>
            </li>
            <li className="nav-item">
              <Link to="register" className='nav-link text-light'>Register</Link>
            </li>
            <li className="nav-item">
              <Link to="technologies" className='nav-link text-light'>Technologies</Link>
            </li>
            </>)
            :(
            <li className="nav-item">
              
                <span className='lead text-white text-end'>{currentUser.username}</span>
                <Link to="login" className='nav-link text-light' onClick={onuserlogout}>Logout</Link>
            </li>)
        }
        </ul>
    </div>
  )
}

export default Header;