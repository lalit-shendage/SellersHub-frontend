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
      <Navbar/>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <input type="text" value={category} onChange={handleCategoryChange} />
        </label>
        <br />
        <label>
          Sub Category:
          <input type="text" value={subCategory} onChange={handleSubCategoryChange} />
        </label>
        <br />
        <label>
          Product Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          MRP:
          <input type="number" value={mrp} onChange={handleMRPChange} />
        </label>
        <br />
        <label>
          Selling Price:
          <input type="number" value={sp} onChange={handleSPChange} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={qty} onChange={handleQtyChange} />
        </label>
        <br />
        <label>
          Images:
          <textarea value={images.join('\n')} onChange={handleImageChange} />        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
