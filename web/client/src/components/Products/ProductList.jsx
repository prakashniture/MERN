import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/apiService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products');
      }
    };

    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {error && <div className="col-span-full text-red-500">{error}</div>}
      {products.map(product => (
        <div key={product.id} className="border border-gray-300 rounded-lg p-4">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
