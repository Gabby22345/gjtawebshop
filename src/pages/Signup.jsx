import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <>
            <h2>Sign Up</h2>

            <form className="login-form">
                <label>First Name:</label><br />
                <input type="text" placeholder="First name" /><br /><br />

                <label>Last Name:</label><br />
                <input type="text" placeholder="Last name" /><br /><br />

                <label>Email:</label><br />
                <input type="email" placeholder="Email address" /><br /><br />

                <label>Password:</label><br />
                <input type="password" placeholder="Password" /><br /><br />

                <label>Confirm Password:</label><br />
                <input type="password" placeholder="Confirm password" /><br /><br />

                <label>Mobile Number:</label><br />
                <input type="text" placeholder="Mobile number" /><br /><br />

                <label>Home Address:</label><br />
                <textarea placeholder="Home address"></textarea><br /><br />
                
                <button type="button">Register</button>
            </form>

            <p>
                Already have an account?
                <Link to="/login"> Back to Login</Link>
            </p>
        </>
    );
}

export default Signup;
