const BASE_URL = 'http://localhost:5000/api';

export const signUp = async (email, businessName, password) => {
  try {
    const response = await fetch(`${BASE_URL}/sellers/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, businessName, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/sellers/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const addProduct = async (productData, authToken) => {
  try {
    
    console.log(productData)
    const response = await fetch(`${BASE_URL}/products/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': `${authToken}`,
      },
      body: JSON.stringify(productData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const addStoreInfo = async (address, gst, logo, storeTimings,authToken) => {
  try {
    console.log(authToken)
    const response = await fetch(`${BASE_URL}/sellers/info`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": `${authToken}`, 
      },
      body: JSON.stringify({ address, gst, logo, storeTimings }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding store info:', error);
    throw error;
  }
};


export const getSellerProducts = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/products/seller/${user._id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting seller products:', error);
    throw error;
  }
};

export const removeProductFromSeller = async (sellerId, productId) => {
  try {
    const response = await fetch(`${BASE_URL}/products/seller/${sellerId}/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Include authentication headers if required
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error removing product:', error);
    throw error;
  }
};

export const editProduct = async (productId, updatedData) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Include authentication headers if required
        },
        body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error editing product:', error);
      throw error;
    }
  };
  export const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('authToken');
  };
