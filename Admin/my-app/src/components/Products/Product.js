import React, { useState } from 'react';
import "./Product.css"
import axios from 'axios';

export default function Product() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productImageurl, setProductImageurl] = useState(null);


  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productPrice', productPrice);
    formData.append('productCategory', productCategory);
    formData.append('productBrand', productBrand);
    formData.append('productImageurl', productImageurl);


    await axios.post('http://localhost:4200/product/postpro', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setProductName('');
    setProductPrice("");
    setProductCategory('');
    setProductBrand('');
    setProductImageurl(null);
  };



  return (
    <div className='form101'>
      <form onSubmit={submitHandler}>
        <input
          className='inputs'
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        /><br />
        <input
          className='inputs'
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        /><br />
        <select value={productCategory}className='inputs' onChange={(e) => setProductCategory(e.target.value)} required>
          <option value="" disabled>Select Category</option>
          <option value="fashion">Fashion</option>
          <option value="furniture">Furniture</option>
          <option value="devices">Devices</option>
          <option value="books">Books</option>
          <option value="none">None</option>
        </select>
        <br />
        <select value={productBrand}className='inputs' onChange={(e) => setProductBrand(e.target.value)} required>
          <option value="" disabled>Select Brand</option>
          <option value="nike">Nike</option>
          <option value="bonanza">Bonanza</option>
          <option value="hair">Hair</option>
          <option value="none">None</option>
        </select><br/>
        <input
          className='inputs'
          type="file"
          name='productImageurl'
          onChange={(e) => setProductImageurl(e.target.files[0])}
          required
        /><br />
        <button className='inputs' type="submit">Add Product</button>
      </form></div>

    // <div className='form101'>

    //   <div className='form1'>
    //     <p className='p1'>Enter Product Name:</p>
    //     <TextField
    //       type='text'
    //       value={productName}
    //       onChange={e => handleChange(setProductName, e.target.value)}
    //     /><br/>
    //     <p className='p1'>Enter Product Price:</p>
    //     <TextField
    //       type='number'
    //       value={productPrice}
    //       onChange={e => handleChange(setProductPrice, e.target.value)}
    //     /><br/>
    //     <p className='p1'>Enter Quantity:</p>
    //     <TextField
    //       type='number'
    //       value={productQuantity}
    //       onChange={e => handleChange(setProductQuantity, e.target.value)}
    //     /><br/>
    //     <p className='p1'>Enter Product Image:</p>
    //     {/* <img className='drop'  alt='drop' /><br/> */}
    //     <input
    //     type="file"
    //     onChange={(e) => handleChange(setProductImageurl,e.target.files[0])}
    //     required
    //   /><br/>
    //     <button className='button' onClick={submitHandler}>Post</button>
    //   </div>
    // </div>
  );
}
