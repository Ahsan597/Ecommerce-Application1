import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import "./Updateproduct.css";

export default function Updateproduct() {
    const { id } = useParams();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productImageurl, setProductImageurl] = useState(null);
    const [existingImage, setExistingImage] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        // Fetch product details to populate the form for updating
        const fetchProduct = async () => {
          const res = await axios.get(`http://localhost:4200/product/getproid/${id}`);
          const product = res.data;
          setProductName(product.productName);
          setProductPrice(product.productPrice);
          setProductCategory(product.productCategory);
          setProductBrand(product.productBrand);
          setExistingImage(product.productImageurl);
        };
        fetchProduct();
      }, [id]);
    
      const updateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productPrice', productPrice);
        formData.append('productCategory', productCategory);
        formData.append('productBrand', productBrand);
        if (productImageurl) {
          formData.append('productImageurl', productImageurl);
        }
    
        await axios.put(`http://localhost:4200/product/putpro/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        navigate('/allproducts');
      };

  return (
       <div style={{marginTop:"-40vmax", marginLeft:"45vmax", justifyContent:"center"}}>
      <h1 style={{marginBottom: "4vmax"}}>Update Product</h1>
      <form onSubmit={updateProduct}>
        <input
          type="text"
          className='inputform'
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        /><br/>
        <input
          type="number"
           className='inputform'
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        /><br/>
        <select value={productCategory}className='inputform' onChange={(e) => setProductCategory(e.target.value)} required>
          <option value="" disabled>Select Category</option>
          <option value="fashion">Fashion</option>
          <option value="furniture">Furniture</option>
          <option value="devices">Devices</option>
          <option value="books">Books</option>
          <option value="none">None</option>
        </select>
        <br />
        <select value={productBrand}className='inputform' onChange={(e) => setProductBrand(e.target.value)} required>
          <option value="" disabled>Select Brand</option>
          <option value="nike">Nike</option>
          <option value="bonanza">Bonanza</option>
          <option value="hair">Hair</option>
          <option value="none">None</option>
        </select><br/>
        <input
          type="file"
          className='inputform'
          onChange={(e) => setProductImageurl(e.target.files[0])}
        />
        {existingImage && (
          <div>
            <p>Current Image:</p>
            <img src={`http://localhost:4200${existingImage}`} alt="Product" width="100" />
          </div>
        )}
        <button type="submit">Update Product</button>
      </form>
    </div>
  )
}
