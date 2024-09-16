import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Person4Icon from "@mui/icons-material/Person4";
import "./Header.css";
import { AuthContext } from './context/AuthContext';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";


const Wrapper = styled(Box)(({ theme }) => ({
    // background: "#1976d2",
    // height: "100vh",
    [theme.breakpoints.down("md")]: {
        background: "orange",
    },
    [theme.breakpoints.down("sm")]: {
        background: "blue",
    },
    [theme.breakpoints.up("lg")]: {
        background: "purple",
    },
}));

export default function Header() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };


    return (
        <>
            <div className="navbar " >
                <div className="nav">
                    <ul className="ul">
                        <li className="li licapital">
                            <Link className="link capitallink" to="/">
                                <HomeIcon className='homeicon'></HomeIcon>
                                CapitaL Store
                            </Link>
                        </li>
                        <li className="li li3">
                            <Link className="link" to="/product">
                                Product
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="marginform">
                    <form className="d-flex formbody">
                        <input className="inp form-control " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btnsearch btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                {isAuthenticated ? (

                    <div className="dropdown">
                        <Person4Icon className="dropdown-toggle per1" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ fontSize: "33px" }}
                        > </Person4Icon>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li> <Link className="dropdown-item" to="/useraccount">My Profile</Link> </li>

                            <li><Link className="dropdown-item" onClick={handleLogout} to="/signin">Logout</Link></li>

                        </ul>
                    </div>
                ) : (
                    <div className='marginsign'>
                        <Link to="/signup" className="link link22"><button className="btn2 btn btn-outline-success "  >Sign up</button></Link>
                        <Link to="/signin" className="link"><button className="btn btn33 btn-outline-success">Sign in</button></Link>
                    </div>
                )}
            </div>
            <div className="nav44">
                <ul className='ulnav2'>
                    <li className='linav2'> <Link className="account acc" to="/deals" >Deals</Link></li>
                    <li className='linav2'> <Link className="account acctt" to="/bonanza" >Bonanza</Link></li>
                    <li className='linav2'><Link className="account" to="/nike" >Nike</Link></li>
                    <li className='linav2'><Link className="account" to="/haier" >Haier</Link></li>
                    <li className='linav2 li2nav2'><Link className="account accountcart" to="/addtocart" >
                        <AddShoppingCartIcon className="per1"></AddShoppingCartIcon>
                    </Link></li>
                </ul> </div>


        </>
    )
}