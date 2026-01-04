import React, { useContext, useState } from 'react';
import cart_icon from '../Assets/cart_icon.png';
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import './navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
        setMobileMenuOpen(false); // Close menu when item is clicked
    };

    return (
        <>
            <div className='navbar'>
                <IoMenuSharp className='menuicon' onClick={toggleMenu} />
                <h1>VShop</h1>

                <ul className='nav_menue'>
                    <li className={menu === "shop" ? "active" : ""} onClick={() => setMenu("shop")}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Shop</Link>
                    </li>
                    <li className={menu === "men" ? "active" : ""} onClick={() => setMenu("men")}>
                        <Link to="/men" style={{ textDecoration: "none", color: 'inherit' }}>Men</Link>
                    </li>
                    <li className={menu === "women" ? "active" : ""} onClick={() => setMenu("women")}>
                        <Link to="/women" style={{ textDecoration: "none", color: 'inherit' }}>Women</Link>
                    </li>
                    <li className={menu === "kids" ? "active" : ""} onClick={() => setMenu("kids")}>
                        <Link to="/kids" style={{ textDecoration: "none", color: 'inherit' }}>Kids</Link>
                    </li>
                </ul>

                <div className='nav_login_cart'>
                    {localStorage.getItem("auth-token") ? <button onClick={() => { localStorage.removeItem("auth-token"); window.location.replace("/"); }}>Logout</button> : <Link to="/login"><button>Login</button></Link>}
                    
                    <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                    <div className="nav_cart_count">{getTotalCartItems()}</div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`mobile_sidebar ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="sidebar_header">
                    <h2>Menu</h2>
                    <IoCloseSharp className='close_icon' onClick={toggleMenu} />
                </div>

                <ul className='sidebar_menu'>
                    <li className={menu === "shop" ? "active" : ""} onClick={() => handleMenuClick("shop")}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Shop</Link>
                    </li>
                    <li className={menu === "men" ? "active" : ""} onClick={() => handleMenuClick("men")}>
                        <Link to="/men" style={{ textDecoration: "none", color: 'inherit' }}>Men</Link>
                    </li>
                    <li className={menu === "women" ? "active" : ""} onClick={() => handleMenuClick("women")}>
                        <Link to="/women" style={{ textDecoration: "none", color: 'inherit' }}>Women</Link>
                    </li>
                    <li className={menu === "kids" ? "active" : ""} onClick={() => handleMenuClick("kids")}>
                        <Link to="/kids" style={{ textDecoration: "none", color: 'inherit' }}>Kids</Link>
                    </li>
                </ul>

                <div className="sidebar_login">
                    {localStorage.getItem("auth-token") ? <button onClick={() => { localStorage.removeItem("auth-token"); window.location.replace("/"); }}>Logout</button> : <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    
                        <button>Login</button>
                    </Link>}
                </div>
            </div>

            {/* Overlay */}
            {mobileMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </>
    );
};