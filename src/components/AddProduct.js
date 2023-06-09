import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);

  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [productName, setProductName] = useState('');
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

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
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
    // Assuming multiple image selection is allowed
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      category,
      subCategory,
      productName,
      mrp,
      sp,
      qty,
      images,
    };
    addProduct(productData);
    // Reset form fields after submission
    setCategory('');
    setSubCategory('');
    setProductName('');
    setMRP('');
    setSP('');
    setQty('');
    setImages([]);
  };

  return (
    <div>
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
          <input type="text" value={productName} onChange={handleProductNameChange} />
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
          <input type="file" multiple onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
