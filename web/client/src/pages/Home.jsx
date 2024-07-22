import React from 'react';
import ProductList from '../components/Products/ProductList';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
};

export default Home;
