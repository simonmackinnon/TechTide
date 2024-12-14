import React from 'react';
import ProductCard from './ProductCard';

const mockProducts = [
  { id: 1, name: 'Product 1', price: '$10.50', description: 'Description for product 1' },
  { id: 2, name: 'Product 2', price: '$20.75', description: 'Description for product 2' },
  { id: 3, name: 'Product 3', price: '$29.99', description: 'Description for product 3' },
];

function Products({ addToCart }) {
  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="row">
        
        {mockProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
            <li key={product.id}>
                <ProductCard 
                    product={product}
                    addToCart={addToCart}
                />
            </li>
            </div>
        ))}
      
      </div>
    </div>
  );
}

export default Products;
