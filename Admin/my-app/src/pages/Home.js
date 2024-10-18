import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='sidecom'>
      <div className='sidecomponent'>
        <ul>
          <li className="li"><Link className='li' id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>Product</Link></li>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}  ><Link to="/addproduct" style={{ textDecoration: "none", color: "black" }}>Add Product</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="allproducts" style={{ textDecoration: "none", color: "black" }}>All Products</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="brands" style={{ textDecoration: "none", color: "black" }}>Brands</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="deals" style={{ textDecoration: "none", color: "black" }}>Deals</Link></MenuItem>
          </Menu>
          <li className='li'><Link to="/order" className='li'>Orders</Link></li>
          <li className='li'><Link to="/sales" className='li'>Sales</Link></li>
        </ul>
      </div>
    </div>
  );
}
