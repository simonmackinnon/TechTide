import React from 'react';

function ProductCard({ name, description, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default ProductCard;
