import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Navbar from './Navbar';


const AddProduct = () => {
  const { user, addProduct } = useContext(AuthContext);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [name, setName] = useState('');
  const [mrp, setMRP] = useState('');
  const [sp, setSP] = useState('');
  const [qty, setQty] = useState('');
  const [images, setImages] = useState([]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubCategoryChange = (e) => {
    setSubCategory(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMRPChange = (e) => {
    setMRP(e.target.value);
  };

  const handleSPChange = (e) => {
    setSP(e.target.value);
  };

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  const handleImageChange = (e) => {
    const urls = e.target.value.split('\n');
    setImages(urls);
  };

  const handleAddProduct = async (user) => {
    try {
       

      await addProduct(category, subCategory, name, mrp, sp, qty, images);
      console.log('Product added successfully');
      // Reset form fields after submission
      setCategory('');
      setSubCategory('');
      setName('');
      setMRP('');
      setSP('');
      setQty('');
      setImages([]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    handleAddProduct(user);
    
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 "style={{ maxWidth: "400px" }}>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category:
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={category}
              onChange={handleCategoryChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subCategory" className="form-label">
              Sub Category:
            </label>
            <input
              type="text"
              className="form-control"
              id="subCategory"
              value={subCategory}
              onChange={handleSubCategoryChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mrp" className="form-label">
              MRP:
            </label>
            <input
              type="number"
              className="form-control"
              id="mrp"
              value={mrp}
              onChange={handleMRPChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sellingPrice" className="form-label">
              Selling Price:
            </label>
            <input
              type="number"
              className="form-control"
              id="sellingPrice"
              value={sp}
              onChange={handleSPChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity:
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={qty}
              onChange={handleQtyChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="images" className="form-label">
              Images:
            </label>
            <textarea
              className="form-control"
              id="images"
              value={images}
              onChange={handleImageChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default AddProduct;
