import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { addStoreInfo } from '../services/api';
import Navbar from './Navbar';

const StoreInfo = () => {
  const [address, setAddress] = useState('');
  const [gst, setGst] = useState('');
  const [logo, setLogo] = useState('');
  const [storeTimings, setStoreTimings] = useState('');
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleGstChange = (e) => {
    setGst(e.target.value);
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.value);
  };

  const handleStoreTimingsChange = (e) => {
    setStoreTimings(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
     
      await addStoreInfo(address, gst, logo, storeTimings, token);
      console.log('Store info added successfully!');
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Error adding store info:', error);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="container mt-5" style={{ maxWidth: "400px" }}>
        <h2>Store Info</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gst" className="form-label">
              GST Number:
            </label>
            <input
              type="text"
              className="form-control"
              id="gst"
              value={gst}
              onChange={handleGstChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="logo" className="form-label">
              Logo:
            </label>
            <input
              type="text"
              className="form-control"
              id="logo"
              value={logo}
              onChange={handleLogoChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="storeTimings" className="form-label">
              Store Timings:
            </label>
            <input
              type="text"
              className="form-control"
              id="storeTimings"
              value={storeTimings}
              onChange={handleStoreTimingsChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Store Info
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default StoreInfo;
