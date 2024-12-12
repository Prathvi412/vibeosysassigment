import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddEditProduct from './components/AddEditProduct';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddEditProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
