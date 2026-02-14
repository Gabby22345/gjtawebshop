import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <h2>Login</h2>
            <form className="login-form">
                <label>Email:</label><br />
                <input type="email" placeholder="Enter your email" /><br /><br />
                <label>Password:</label><br />
                <input type="password" placeholder="Enter your password" /><br /><br />
                <button type="submit" className="login-btn">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </>
    );
}

export default Login;
