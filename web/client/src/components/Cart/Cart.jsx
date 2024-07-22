import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../../slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-disc pl-5 mb-4">
            {items.map(item => (
              <li key={item._id} className="mb-2">
                <div className="bg-white p-4 rounded shadow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-700">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClear}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
