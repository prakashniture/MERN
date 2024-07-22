import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../services/apiService';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        setError('Failed to fetch product details');
      }
    };

    getProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      {error && <div className="text-red-500">{error}</div>}
      <img src={product.image} alt={product.title} className="w-full h-96 object-cover mb-4 rounded" />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-lg mb-4">${product.price}</p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
