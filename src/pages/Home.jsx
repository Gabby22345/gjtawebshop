import React from 'react';

function Home() {
    return (
        <>
            <h1>Featured Products</h1>
            <div className="products-grid">
                <div className="product-card">
                    <div className="product-image">
                        <img src="/Sweatpants.jpg" alt="Sweatpants" />
                    </div>
                    <h3>Sweatpants</h3>
                    <p>The ultimate everyday relaxation essential.</p>
                    <span className="price">₱799</span>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src="/product4.jpg" alt="Hoodie" />
                    </div>
                    <h3>Hoodie</h3>
                    <p>Wrap yourself in pure comfort with our breathable, heavyweight fleece.</p>
                    <span className="price">₱999</span>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src="/product2.jpg" alt="Jorts" />
                    </div>
                    <h3>Jorts</h3>
                    <p>Forget short-shorts—it's the summer of the knee-grazing jort.</p>
                    <span className="price">₱699</span>
                </div>
            </div>
        </>
    );
}

export default Home;
