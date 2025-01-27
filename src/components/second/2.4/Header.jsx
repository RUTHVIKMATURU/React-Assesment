import React from 'react'
import './header.css'
function Header() {
  return (
    <nav className='d-flex justify-content-between bg-primary p-1 align-items-center'> 
      <div className="buttons w-50">
        <ul className='d-flex justify-content-between'>
          <li>Logo</li>
          <li>Home</li>
          <li>About Author</li>
          <li>About this Project</li>
        </ul>
      </div>
      <div className="socialmediaicons w-50">
        <ul className='d-flex justify-content-end'>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" width={25}/></li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" width={25} alt="" /></li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKrFhY-ljA-u7J5IMWeTv8zmpBx4PP9nQMw&s" width={25} alt="" /></li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-h-e2hgz8mwGfCt4gvj4IgMG_wAUolVM6w&s" width={25} alt="" /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header