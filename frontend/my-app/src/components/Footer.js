import React from 'react';
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <div className='footcolor'>
                <div className="footer">
                    <h5 className="copy">Copyright © 2024 www.CapitalStore.com</h5>
                </div>
                <div className=''>
                    <ul className='licap2'>
                        <li className='licap'><Link className='licap' to="/">CapitalStore</Link></li>
                        <li className='licap'><Link className='licap' to="/product">Products</Link></li>
                        <li className='licap'><Link className='licap' to="/signup">Signup</Link></li>
                        <li className='licap'><Link className='licap' to="/deals">Deals</Link></li>
                    </ul>
                    <ul className='licap3'>
                        <li className='liicons'><Link><InstagramIcon></InstagramIcon></Link></li>
                        <li className='liicons'><Link><WhatsAppIcon></WhatsAppIcon></Link></li>
                        <li className='liicons'><Link><FacebookIcon></FacebookIcon></Link></li>
                        <li className='liicons'><Link><EmailIcon></EmailIcon></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
