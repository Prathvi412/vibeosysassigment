import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productsSlice';
import { useNavigate } from 'react-router-dom';

const AddEditProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    unit: '',
    category: '',
    expiry: '',
    materials: [],
  });

  const [material, setMaterial] = useState({
    id: 0,
    name: '',
    unit: '',
    quantity: 0,
    price: 0,
    tax: 0,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddMaterial = () => {
    const totalPrice = material.quantity * material.price;
    const taxAmount = totalPrice * 0.1; // 10% tax
    const totalAmount = totalPrice + taxAmount;

    setProduct((prevProduct) => ({
      ...prevProduct,
      materials: [
        ...prevProduct.materials,
        {
          ...material,
          id: prevProduct.materials.length + 1, // Assign a unique ID
          totalPrice,
          taxAmount,
          totalAmount,
        },
      ],
    }));

    setMaterial({ id: 0, name: '', unit: '', quantity: 0, price: 0, tax: 0 });
  };

  const handleSaveProduct = () => {
    const totalCost = product.materials.reduce((sum, mat) => sum + mat.totalAmount, 0);

    dispatch(
      addProduct({
        ...product,
        totalCost,
      })
    );
    navigate('/');
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <div>
        <label>
          Product Name:
          <input
            type="text"
            placeholder="Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Product Unit:
          <select
            value={product.unit}
            onChange={(e) => setProduct({ ...product, unit: e.target.value })}
          >
            <option value="">Select Unit</option>
            <option value="ml">ml</option>
            <option value="ltr">ltr</option>
            <option value="gm">gm</option>
            <option value="kg">kg</option>
            <option value="mtr">mtr</option>
            <option value="mm">mm</option>
            <option value="box">box</option>
            <option value="units">units</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Product Category:
          <select
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
          >
            <option value="">Select Category</option>
            <option value="Finished">Finished</option>
            <option value="Semi finished">Semi finished</option>
            <option value="Subsidiary">Subsidiary</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Expiry Date:
          <input
            type="date"
            value={product.expiry}
            onChange={(e) => setProduct({ ...product, expiry: e.target.value })}
          />
        </label>
      </div>

      <h2>Materials</h2>
      <div>
        <label>
          Material Name:
          <input
            type="text"
            placeholder="Material Name"
            value={material.name}
            onChange={(e) => setMaterial({ ...material, name: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Material Unit:
          <select
            value={material.unit}
            onChange={(e) => setMaterial({ ...material, unit: e.target.value })}
          >
            <option value="">Select Unit</option>
            <option value="ml">ml</option>
            <option value="ltr">ltr</option>
            <option value="gm">gm</option>
            <option value="kg">kg</option>
            <option value="mtr">mtr</option>
            <option value="mm">mm</option>
            <option value="box">box</option>
            <option value="units">units</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Material Quantity:
          <input
            type="number"
            placeholder="Quantity"
            value={material.quantity}
            onChange={(e) => setMaterial({ ...material, quantity: +e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Material Price:
          <input
            type="number"
            placeholder="Price"
            value={material.price}
            onChange={(e) => setMaterial({ ...material, price: +e.target.value })}
          />
        </label>
      </div>
      <button onClick={handleAddMaterial}>Add Material</button>

      <h3>Materials Added:</h3>
      <ul>
        {product.materials.map((mat) => (
          <li key={mat.id}>
            {mat.name} - Unit: {mat.unit}, Qty: {mat.quantity}, Price: ₹{mat.price.toFixed(2)}, Total
            Amount: ₹{mat.totalAmount.toFixed(2)}
          </li>
        ))}
      </ul>

      <button onClick={handleSaveProduct}>Save Product</button>
    </div>
  );
};

export default AddEditProduct;
