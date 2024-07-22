import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://fakestoreapi.com';

// Function to fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Function to fetch a product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Function to handle user login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Function to handle user registration
export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, { username, email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
