import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h1>Product List</h1>
      <Link to="/add">Add New Product</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Total Cost</th>
            <th>Raw Materials</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td><Link to={`/update/${index}`}>{product.name}</Link></td>
              <td>{product.category}</td>
              <td>{product.totalCost}</td>
              <td>{product.materials.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
