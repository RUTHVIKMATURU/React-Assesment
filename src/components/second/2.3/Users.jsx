import React from 'react'
import User from './User'
import './Users.css'
function Users() {
  let user = [
    {
      "id": 1,
      "username": "emilys",
      "email": "emily.johnson@x.dummyjson.com",
      "firstName": "Emily",
      "lastName": "Johnson",
      "gender": "female",
      "image": "https://dummyjson.com/icon/emilys/128"
    },
    {
      "id": 2,
      "username": "john_doe",
      "email": "john.doe@x.dummyjson.com",
      "firstName": "John",
      "lastName": "Doe",
      "gender": "male",
      "image": "https://dummyjson.com/icon/johndoe/128"
    },
    {
      "id": 3,
      "username": "annas",
      "email": "anna.smith@x.dummyjson.com",
      "firstName": "Anna",
      "lastName": "Smith",
      "gender": "female",
      "image": "https://dummyjson.com/icon/annas/128"
    },
    {
      "id": 4,
      "username": "mikeb",
      "email": "mike.brown@x.dummyjson.com",
      "firstName": "Mike",
      "lastName": "Brown",
      "gender": "male",
      "image": "https://dummyjson.com/icon/mikeb/128"
    },
    {
      "id": 5,
      "username": "sarahk",
      "email": "sarah.kelly@x.dummyjson.com",
      "firstName": "Sarah",
      "lastName": "Kelly",
      "gender": "female",
      "image": "https://dummyjson.com/icon/sarahk/128"
    },
    {
      "id": 6,
      "username": "davem",
      "email": "dave.martin@x.dummyjson.com",
      "firstName": "Dave",
      "lastName": "Martin",
      "gender": "male",
      "image": "https://dummyjson.com/icon/davem/128"
    },
    {
      "id": 7,
      "username": "lucyc",
      "email": "lucy.clark@x.dummyjson.com",
      "firstName": "Lucy",
      "lastName": "Clark",
      "gender": "female",
      "image": "https://dummyjson.com/icon/lucyc/128"
    },
    {
      "id": 8,
      "username": "robertt",
      "email": "robert.taylor@x.dummyjson.com",
      "firstName": "Robert",
      "lastName": "Taylor",
      "gender": "male",
      "image": "https://dummyjson.com/icon/robertt/128"
    }
  ]
  
  return (
    <div>
      <nav>
        <ul className='display-3'>
          <li>logo</li>
          <li>Home</li>
          <li>Signup</li>
          <li>Login</li>
        </ul>
      </nav>
      <main>
        <div className='display-2 users'>
        {
          user.map((user) => <User key={user.id} user={user} />)
        }
        </div>
        
      </main>
      <footer>
  <ul className="social-media">
    <li>
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i> Facebook
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i> Twitter
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i> Instagram
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i> LinkedIn
      </a>
    </li>
  </ul>
</footer>

    </div>
  )
}

export default Users