import React, { useState } from 'react'
import "./Product.css";
import Card1 from './products/Card1';

import { Link } from 'react-router-dom';
export default function Product() {
    return (
        <>
            <div className="maindiv">
                <Card1/>
            </div>
        </>
    )
}