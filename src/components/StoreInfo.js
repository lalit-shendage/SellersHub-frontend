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
      
      // Call the addStoreInfo function from the API and pass the required data
      await addStoreInfo(address, gst, logo, storeTimings, token);
      // Handle successful store info addition, such as navigating to the dashboard
      console.log('Store info added successfully!');
      navigate('/dashboard'); // Navigate to the dashboard page
    } catch (error) {
      // Handle store info addition error
      console.error('Error adding store info:', error);
    }
  };

  return (
    <div>
      <Navbar/>
      <h2>Store Info</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        <br />
        <label>
          GST Number:
          <input type="text" value={gst} onChange={handleGstChange} />
        </label>
        <br />
        <label>
          Logo:
          <input type="text" value={logo} onChange={handleLogoChange} />
        </label>
        <br />
        <label>
          Store Timings:
          <input type="text" value={storeTimings} onChange={handleStoreTimingsChange} />
        </label>
        <br />
        <button type="submit">Save Store Info</button>
      </form>
    </div>
  );
};

export default StoreInfo;
