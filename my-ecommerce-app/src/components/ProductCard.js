import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text"><strong>{product.price}</strong></p>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    </div>
  );
}

export default ProductCard;
