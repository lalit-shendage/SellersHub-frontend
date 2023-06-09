import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import StoreInfo from './components/StoreInfo';
import AddProduct from './components/AddProduct';
import Dashboard from './components/Dashboard';
import SellerProducts from './components/SellerProducts';
// import Navbar from './components/Navbar'

function App() {
  return (
    <>
    
        <Routes>
        {/* <Navbar/> */}
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/" element={<SignUp/>} />
          <Route exact path="/storeinfo" element={<StoreInfo/>} />
          <Route exact path="/addproduct" element={<AddProduct/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/sellerproducts" element={<SellerProducts/>} />
          {/* Add more routes as needed */}
          {/* <Route component={NotFound} /> */}
        </Routes>
        </>
  );
}

export default App;
