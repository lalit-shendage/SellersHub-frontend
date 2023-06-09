import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';

const SellerProducts = () => {
  const { sellerProducts, getSellerProducts, removeProductFromSeller } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSellerProducts();
  }, []);

  const fetchSellerProducts = async () => {
    try {
      await getSellerProducts();
      setLoading(false);
    } catch (error) {
      console.error('Error fetching seller products:', error);
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      await removeProductFromSeller(productId);
      console.log('Product removed successfully!');
      fetchSellerProducts(); // Fetch the updated seller products
    } catch (error) {
      console.error('Error removing product:', error);
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
              <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/addproduct">Add Product</Link>
    </div>
  );
};

export default SellerProducts;
