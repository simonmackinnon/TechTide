import React from 'react';
import ProductCard from './ProductCard';

const mockProducts = [
  { id: 1, name: 'Product 1', price: '$10', description: 'Description for product 1' },
  { id: 2, name: 'Product 2', price: '$20', description: 'Description for product 2' },
  { id: 3, name: 'Product 3', price: '$30', description: 'Description for product 3' },
];

function Products() {
  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {mockProducts.map((product) => (
            <li key={product.id}>
                <ProductCard 
                    name={product.name}
                    description={product.description}
                    price={product.price}
                />
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
