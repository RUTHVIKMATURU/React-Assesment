import React from 'react'
import './Product.css'
import { useState } from 'react'
import StarRating from './StarRating'
function Product(props) {
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText(!showText); 
  };
  return (
    <div className='product p-3'>
      <h3>{props.ProdObj.category}</h3>
      <img src={props.ProdObj.image} alt=""/>
      <h5>{props.ProdObj.title}</h5>
      <button type="button" className='bg-primary  text-light rounded-3  border-0 p-1 px-2 my-2' onClick={handleClick}>Description</button>
      {showText && <p>{props.ProdObj.description}</p>}
      <h4 className='price'>{props.ProdObj.price}</h4>
      <div className="rating">
      <h6 className='fs-3'>{props.ProdObj.rating.rate}</h6>
      <StarRating rating={Math.round(props.ProdObj.rating.rate * 2) / 2} />
      </div>
    </div>
  )
}

export default Product