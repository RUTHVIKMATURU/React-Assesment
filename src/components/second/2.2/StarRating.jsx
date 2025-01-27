import React from 'react';
import './StarRating.css';
function StarRating({ rating }) {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating fs-3">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="star full">&#9733;</span>
      ))}
      {halfStar && <span className="star half">&#9734;</span>} 
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star empty">&#9734;</span>
      ))}
    </div>
  );
}
export default StarRating;