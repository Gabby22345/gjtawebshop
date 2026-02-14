import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TransactionConfirmation() {
    const [orderDetails, setOrderDetails] = useState({
        orderNum: '',
        orderDate: '',
        deliveryMethod: 'Standard Delivery',
        deliveryFee: 'Free',
        totalAmount: '₱1,500',
        expectedDate: ''
    });

    useEffect(() => {
        const order = JSON.parse(localStorage.getItem('order')) || {};
        
        // Generate order number
        const orderNum = 'ORD-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 100000);
        
        // Set current date
        const today = new Date();
        const orderDate = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Delivery methods
        const deliveryMethods = {
            standard: { name: 'Standard Delivery', fee: 0, days: '5-7' },
            express: { name: 'Express Delivery', fee: 150, days: '2-3' },
            'same-day': { name: 'Same Day Delivery', fee: 500, days: '0-1' }
        };

        const delivery = deliveryMethods[order.delivery] || deliveryMethods.standard;
        
        // Calculate expected date
        const startDate = new Date(today);
        startDate.setDate(startDate.getDate() + parseInt(delivery.days));
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 3);
        
        const expectedDate = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + 
            ' - ' + endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        setOrderDetails({
            orderNum,
            orderDate,
            deliveryMethod: delivery.name,
            deliveryFee: delivery.fee === 0 ? 'Free' : '₱' + delivery.fee,
            totalAmount: '₱' + (1500 + delivery.fee),
            expectedDate
        });
    }, []);

    return (
        <>
            <h1>Transaction Confirmation</h1>

            <div className="receipt-container">
                <div className="success-icon">✓</div>
                <h2>Payment Successful!</h2>
                <p>Your order has been confirmed.</p>

                <div className="receipt-section">
                    <h3>Order Details</h3>
                    <div className="receipt-row">
                        <span>Order Number:</span>
                        <span>{orderDetails.orderNum}</span>
                    </div>
                    <div className="receipt-row">
                        <span>Date:</span>
                        <span>{orderDetails.orderDate}</span>
                    </div>
                    <div className="receipt-row">
                        <span>Status:</span>
                        <span>Confirmed</span>
                    </div>
                </div>

                <div className="receipt-section">
                    <h3>Items</h3>
                    <div className="receipt-row">
                        <span>Sweatpants (1)</span>
                        <span>₱799</span>
                    </div>
                    <div className="receipt-row">
                        <span>Hoodie (1)</span>
                        <span>₱701</span>
                    </div>
                </div>

                <div className="receipt-section">
                    <h3>Summary</h3>
                    <div className="receipt-row">
                        <span>Subtotal:</span>
                        <span>₱1,500</span>
                    </div>
                    <div className="receipt-row">
                        <span>Delivery:</span>
                        <span>{orderDetails.deliveryFee}</span>
                    </div>
                    <div className="receipt-row total">
                        <span>Total:</span>
                        <span>{orderDetails.totalAmount}</span>
                    </div>
                </div>

                <div className="receipt-section">
                    <h3>Delivery Info</h3>
                    <div className="receipt-row">
                        <span>Method:</span>
                        <span>{orderDetails.deliveryMethod}</span>
                    </div>
                    <div className="receipt-row">
                        <span>Expected:</span>
                        <span>{orderDetails.expectedDate}</span>
                    </div>
                </div>

                <div className="btn-group">
                    <Link to="/" className="btn btn-primary">Continue Shopping</Link>
                    <Link to="/cart" className="btn btn-secondary">Back to Cart</Link>
                </div>
            </div>
        </>
    );
}

export default TransactionConfirmation;
