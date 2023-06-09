import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const { token, getSellerProducts } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    if (token) {
      fetchSellerProducts();
    }
  }, []);

  const fetchSellerProducts = async () => {
    try {
      // Replace 'sellerId' with the actual seller ID
      const sellerId = 'your-seller-id';
      const data = await getSellerProducts(sellerId);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching seller products:', error);
    }
  };

  return (
    <div>
      <h2>Seller Dashboard</h2>
      {token && products.length > 0 ? (
        <>
          <Link to="/storeinfo">Add Store Info</Link>
          <br />
          <Link to="/addproduct">Add Product</Link>
          <br />
          <Link to="/sellerproducts">View Seller Products</Link>
          <br />
          <h3>Products:</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - {product.price}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Please sign in to access the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
