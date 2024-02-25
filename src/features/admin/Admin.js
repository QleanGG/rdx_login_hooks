// AdminComponent.js
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProdsAsync, prodsInfo } from "../products/productsSlicer";
import {addProductAsync} from './adminSlice';

const AdminComponent = () => {
  const MY_SERVER = "http://127.0.0.1:8000";
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  //   const dispatch = useDispatch();
  const products = useSelector(prodsInfo);

  useEffect(() => {
    dispatch(loadProdsAsync());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("desc",desc);
    formData.append("price",price);
    formData.append("image",image);
    dispatch(addProductAsync(formData));
    setDesc("");
    setPrice("");
    setImage(null);
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>

      <h2>Existing Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>id: {product.id}</div>
            <div>Title: {product.title}</div>
            <div>Price: ₪{product.price}</div>
            <div>
              Image:{" "}
              <img
                src={MY_SERVER + "/" + product.image}
                alt={product.title}
                height="100px"
                style={{ marginBottom: "150px" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminComponent;
