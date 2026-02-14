import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentDelivery() {
    const navigate = useNavigate();
    const [deliveryFee, setDeliveryFee] = useState(0);
    const subtotal = 1500;

    const deliveryFees = { 
        standard: 0, 
        express: 150, 
        'same-day': 500 
    };

    const handleDeliveryChange = (e) => {
        const fee = deliveryFees[e.target.value];
        setDeliveryFee(fee);
    };

    const handleCheckout = () => {
        const payment = document.querySelector('input[name="payment"]:checked')?.value;
        const delivery = document.querySelector('input[name="delivery"]:checked')?.value;
        
        if (payment && delivery) {
            localStorage.setItem('order', JSON.stringify({ payment, delivery }));
            navigate('/transaction-confirmation');
        } else {
            alert('Please select payment method and delivery option');
        }
    };

    return (
        <>
            <h1>Payment & Delivery</h1>
            
            <div className="payment-container">
                <h2 style={{ color: '#222', marginTop: 0 }}>Payment Method</h2>
                <div className="radio-group">
                    <label><input type="radio" name="payment" value="credit-card" required /> Credit/Debit Card</label>
                    <label><input type="radio" name="payment" value="gcash" /> GCash</label>
                    <label><input type="radio" name="payment" value="cod" /> Cash on Delivery</label>
                </div>

                <h2 style={{ color: '#222' }}>Delivery Option</h2>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="delivery" value="standard" required onChange={handleDeliveryChange} /> 
                        Standard (Free, 5-7 days)
                    </label>
                    <label>
                        <input type="radio" name="delivery" value="express" onChange={handleDeliveryChange} /> 
                        Express (₱150, 2-3 days)
                    </label>
                    <label>
                        <input type="radio" name="delivery" value="same-day" onChange={handleDeliveryChange} /> 
                        Same Day (₱500)
                    </label>
                </div>

                <h2 style={{ color: '#222' }}>Delivery Address</h2>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" required />
                </div>
                <div className="form-group">
                    <label>Street Address</label>
                    <input type="text" required />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" required />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" required />
                </div>

                <div className="total-box">
                    Total: ₱{subtotal + deliveryFee}
                </div>

                <div className="btn-group">
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                        Back
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleCheckout}>
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </>
    );
}

export default PaymentDelivery;
