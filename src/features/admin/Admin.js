// AdminComponent.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './actions';
import { selectProducts } from './selectors';

const AdminComponent = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ title, price, image }));
    setTitle('');
    setPrice('');
    setImage('');
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <button type="submit">Add Product</button>
      </form>

      <h2>Existing Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>Title: {product.title}</div>
            <div>Price: ${product.price}</div>
            <div>Image: <img src={product.image} alt={product.title} /></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminComponent;
