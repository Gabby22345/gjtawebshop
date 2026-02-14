import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', message: '' });
    const [response, setResponse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.name.trim() === '' || formData.message.trim() === '') {
            setResponse('Please fill out all fields.');
        } else {
            setResponse(`Thank you for contacting us, ${formData.name}!`);
            setFormData({ name: '', message: '' });
        }
    };

    return (
        <>
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> gabbyalpasan667@gmail.com</p>
            <p><strong>Contact Number:</strong> 09663713233</p>
            <p><strong>Location:</strong> Philippines</p>

            <h2>Send us a message</h2>
            <form id="contactForm" onSubmit={handleSubmit} className="login-form">
                <label htmlFor="name">Name:</label><br />
                <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                /><br /><br />

                <label htmlFor="message">Message:</label><br />
                <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea><br /><br />

                <button type="submit">Submit</button>
            </form>

            {response && (
                <p id="response" style={{ color: response.includes('Thank you') ? 'green' : 'red' }}>
                    {response}
                </p>
            )}
        </>
    );
}

export default Contact;
