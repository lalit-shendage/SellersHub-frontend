import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "./Navbar";

const Dashboard = () => {
  const { token, getSellerProducts, user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (user) {
      fetchSellerProducts(user);
    }
  }, []);

  const fetchSellerProducts = async (user) => {
    try {
      const data = await getSellerProducts(user);
      setProducts(data);
      console.log("Fetched products:", data);
    } catch (error) {
      console.error("Error fetching seller products:", error);
    }
  };

  return (
    <div>
      {token ? (
        <>
          <Navbar />
          <div className="container mt-5">
            <div className="row">
            <div className="card mx-auto" style={{ maxWidth: '400px' }}>
  <div className="card-body d-flex flex-column">
    <h3 className="card-title">Seller Information:</h3>
    <p className="card-text">Business Name: {user.businessName}</p>
    <p className="card-text">Store timing: {user.storeTimings}</p>
    <p className="card-text">GST: {user.gst}</p>
    <p className="card-text">Address: {user.address}</p>
    <div className="mt-auto">
      <button className="btn btn-primary">Copy Referral URL</button>
    </div>
  </div>
</div>


              <h3 style={{ textAlign: 'center' }} className="mt-4">Products:</h3>
                {products.length > 0 ? (
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
                      {products.map((product) => (
                        <tr key={product._id}>
                          <td>
                            <img
                              src={product.image}
                              alt={product.name}
                              width="50"
                              height="50"
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
                  <p>No products available</p>
                )}
              </div>
          </div>
        </>
      ) : (
        <p>Please sign in to access the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
