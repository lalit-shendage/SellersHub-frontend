import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to the login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
      <Link className="navbar-brand mx-10" to="/dashboard">
        {user.businessName}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/storeinfo">
              Add Store Info
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addproduct">
              Add Product
            </Link>
          </li>
        </ul>
      </div>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
