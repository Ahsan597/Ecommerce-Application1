import React from 'react';
import "./Header.css"
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
       <div className="navbar">
                    <div className="nav" >
                        <ul className="ul">
                            <li className="li"><Link className="link capitallink" to="/"> <StorefrontIcon className="storeicon" style={{ fontSize: 35 }}></StorefrontIcon>CapitaL Store</Link></li>
                        </ul></div>
                        </div>
    </div>
  );
}
