import React from 'react';
import "./Useraccount.css";

export default function Useraccount(props) {
    return (
        <div className='allheight'>
            <div className='profile'>
                <h1>My Profile</h1>
                <div className='profiledata'>
                    <h5 className='textpro'>Name:</h5>
                    <h5 className='textpro'>Phone No:</h5>
                    <h5 className='textpro'>Gmail:</h5>
                </div>
            </div>
        </div>
    )
}