import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Layout({ children }) {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <>
            <header>
                <img src="/logo.png" alt="company logo" className="logo" />
                <h1>Y.O.U Clothing</h1>
            </header>

            <div className="container">
                <nav className="sidebar">
                    <Link to="/login" className={isActive('/login')}>LOGIN</Link>
                    <Link to="/" className={isActive('/')}>HOME</Link>
                    <Link to="/about" className={isActive('/about')}>ABOUT US</Link>
                    <Link to="/contact" className={isActive('/contact')}>CONTACT US</Link>
                    <Link to="/profile" className={isActive('/profile')}>PROFILE</Link>
                    <Link to="/product" className={isActive('/product')}>PRODUCT</Link>
                    <Link to="/cart" className={isActive('/cart')}>SHOPPING CART</Link>
                </nav>

                <main>
                    {children}
                </main>
            </div>

            <footer>
                <p>© 2026 Y.O.U Clothing</p>
                <p>Email: gabbyalpasan667@gmail.com | Contact No: 09663713233</p>
            </footer>
        </>
    );
}

export default Layout;
