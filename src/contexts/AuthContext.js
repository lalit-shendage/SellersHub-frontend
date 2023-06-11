import React, { createContext, useState, useEffect } from 'react';
import { signIn, signUp, addStoreInfo, addProduct, getSellerProducts, removeProductFromSeller, editProduct } from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState('');
  

  useEffect(() => {
    // Check if the authentication token exists in localStorage
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setToken(authToken);
    }
  }, []);

  // Sign in user and set authentication token
  const handleSignIn = async (email, password) => {
    try {
      const data = await signIn(email, password);
      setToken(data.token);
      localStorage.setItem('authToken', data.token);
       // Fetch user data using the token
      setUser(data.seller)
      
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };

  // Sign up user and set authentication token
  const handleSignUp = async (email, businessName, password) => {
    try {
      const data = await signUp(email, businessName, password);
      setToken(data.token);
      // Store the token in localStorage
      localStorage.setItem('authToken', data.token);
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  // Add store info
  const handleAddStoreInfo = async (address, gst, logo, storeTimings) => {
    try {
      await addStoreInfo(address, gst, logo, storeTimings);
    } catch (error) {
      console.error('Error adding store info:', error);
      throw error;
    }
  };

  // Add product
  const handleAddProduct = async (category, subCategory, name, mrp, sp, qty, images) => {
    try {
      const sellerId = user._id;
      console.log(sellerId)
      const productData = {
        name,
        category,
        subCategory,
        mrp,
        sellers: [
          {
            seller: sellerId,
            sellingPrice: sp,
            quantity: qty,
          },
        ],
        images,
      };
        console.log(token)
      await addProduct(productData,token);
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  };

  // Get seller products
  const handleGetSellerProducts = async (user) => {
    try {
      const data = await getSellerProducts(user);
      return data;
    } catch (error) {
      console.error('Error getting seller products:', error);
      throw error;
    }
  };

  // Remove product from seller
  const handleRemoveProductFromSeller = async (sellerId, productId) => {
    try {
      await removeProductFromSeller(sellerId, productId);
    } catch (error) {
      console.error('Error removing product:', error);
      throw error;
    }
  };

  // Edit product
  const handleEditProduct = async (productId, updatedData) => {
    try {
      await editProduct(productId, updatedData);
    } catch (error) {
      console.error('Error editing product:', error);
      throw error;
    }
  };

  // Log out user and clear authentication token
  const handleLogout = () => {
    setUser(null);
    setToken('');
    // Remove the token from localStorage
    localStorage.removeItem('authToken');
  };

  // Provide the authentication context to the app
  // Provide the authentication context to the app
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signIn: handleSignIn,
        signUp: handleSignUp,
        addStoreInfo: handleAddStoreInfo,
        addProduct: handleAddProduct,
        getSellerProducts: handleGetSellerProducts,
        removeProductFromSeller: handleRemoveProductFromSeller,
        editProduct: handleEditProduct,
        logout: handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
    }

    export { AuthContext, AuthProvider };
