import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";

const SellerProducts = () => {
  const { sellerId } = useParams();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const url = `http://localhost:5000/api/products/seller/${sellerId}`;

  const fetchProducts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Products</h3>
      <div className="row mb-3">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="row">
        {filteredProducts.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Subcategory</th>
                <th>MRP</th>
                <th>Selling Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      width="50"
                      height="50"
                      style={{ borderRadius: "30%" }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.subCategory}</td>
                  <td>{product.mrp}</td>
                  <td>{product.sellers[0].sellingPrice}</td>
                  <td>{product.sellers[0].quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No products available</p>
        )}
      </div>
    </div>
  );
};

export default SellerProducts;
