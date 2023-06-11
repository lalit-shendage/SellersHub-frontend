import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const SellerProducts = () => {
  const { sellerProducts, getSellerProducts, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSellerProducts();
  }, []);

  const fetchSellerProducts = async (user) => {
    try {
      console.log(user)
      await getSellerProducts(user);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching seller products:', error);
    }
  };



  return (
    <div>
      <h2>Seller Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {sellerProducts.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.price}
            </li>
          ))}
        </ul>
      )}
      <Link to="/addproduct">Add Product</Link>
    </div>
  );
};

export default SellerProducts;
