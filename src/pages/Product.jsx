import React from 'react';

function Product() {
    return (
        <>
            <h1>Product Catalog</h1>
            <div className="products-grid">
                <div className="product-card">
                    <div className="product-image">
                        <img src={process.env.PUBLIC_URL + "/product1.jpg"} alt="Product 1" />
                    </div>
                    <h3>Classic T-Shirt</h3>
                    <p>Premium quality cotton t-shirt</p>
                    <span className="price">₱799</span>
                    <button className="add-to-cart">Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={process.env.PUBLIC_URL + "/product2.jpg"} alt="Product 2" />
                    </div>
                    <h3>Denim Jeans</h3>
                    <p>Comfortable fit jeans</p>
                    <span className="price">₱1,299</span>
                    <button className="add-to-cart">Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={process.env.PUBLIC_URL + "/product3.jpg"} alt="Product 3" />
                    </div>
                    <h3>Summer Dress</h3>
                    <p>Light and breathable summer dress</p>
                    <span className="price">₱1,099</span>
                    <button className="add-to-cart">Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={process.env.PUBLIC_URL + "/product4.jpg"} alt="Product 4" />
                    </div>
                    <h3>Hoodie Jacket</h3>
                    <p>Cozy and stylish hoodie</p>
                    <span className="price">₱999</span>
                    <button className="add-to-cart">Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={process.env.PUBLIC_URL + "/Sweatpants.jpg"} alt="Sweatpants" />
                    </div>
                    <h3>Sweatpants</h3>
                    <p>Comfortable and warm sweatpants</p>
                    <span className="price">₱899</span>
                    <button className="add-to-cart">Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={process.env.PUBLIC_URL + "/product4.jpg"} alt="Hoodie" />
                    </div>
                    <h3>Hoodie</h3>
                    <p>Wrap yourself in pure comfort with our breathable, heavyweight fleece.</p>
                    <span className="price">₱999</span>
                    <button className="add-to-cart">Add to Cart</button>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <img src={process.env.PUBLIC_URL + "/product2.jpg"} alt="Jorts" />
                    </div>
                    <h3>Jorts</h3>
                    <p>Forget short-shorts—it's the summer of the knee-grazing jort.</p>
                    <span className="price">₱699</span>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </>
    );
}

export default Product;