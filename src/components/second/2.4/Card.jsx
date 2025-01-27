import React from 'react'
function Card({ title, description, author, date, image }) {
  return (
    <div className="card">
      <img className='userlogo' src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />
      <img className='image' src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{author}</p>
      <p>{date}</p>
    </div>
  );
}

export default Card