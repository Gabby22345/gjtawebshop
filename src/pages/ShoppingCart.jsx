import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/payment-delivery');
    };

    return (
        <>
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sweatpants</td>
                            <td>₱799</td>
                            <td><input type="number" min="1" defaultValue="1" /></td>
                            <td>₱799</td>
                            <td><button type="button">Remove</button></td>
                        </tr>
                        <tr>
                            <td>Hoodie</td>
                            <td>₱701</td>
                            <td><input type="number" min="1" defaultValue="1" /></td>
                            <td>₱701</td>
                            <td><button type="button">Remove</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="cart-total">
                <p>Total: ₱1,500</p>
                <button className="checkout" onClick={handleCheckout}>Checkout</button>
            </div>
        </>
    );
}

export default ShoppingCart;
