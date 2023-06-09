// import React, { createContext, useState, useEffect } from 'react';
// import { getProducts, addProduct, removeProduct, updateProduct } from '../services/api';

// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   // Fetch products on component mount
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Fetch all products
//   const fetchProducts = async () => {
//     try {
//       const data = await getProducts();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   // Add a new product
//   const handleAddProduct = async (productData) => {
//     try {
//       const newProduct = await addProduct(productData);
//       setProducts([...products, newProduct]);
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   // Remove a product
//   const handleRemoveProduct = async (productId) => {
//     try {
//       await removeProduct(productId);
//       setProducts(products.filter((product) => product.id !== productId));
//     } catch (error) {
//       console.error('Error removing product:', error);
//     }
//   };

//   // Update a product
//   const handleUpdateProduct = async (productId, updatedData) => {
//     try {
//       const updatedProduct = await updateProduct(productId, updatedData);
//       setProducts(
//         products.map((product) => (product.id === productId ? updatedProduct : product))
//       );
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   return (
//     <ProductContext.Provider
//       value={{
//         products,
//         fetchProducts,
//         handleAddProduct,
//         handleRemoveProduct,
//         handleUpdateProduct,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };
