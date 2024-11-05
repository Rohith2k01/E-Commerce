import React from 'react';
import './home.module.css';
import '../cart/cart.module.css';

const HomePage = () => {
    return (
        <div>
            <div className="box">
                <div className="col-4"></div>
                <div className="col-4 sign-text">
                    Sign up and get 20% off on your first order.
                    <a href="#">Sign Up Now</a>
                </div>
                <div className="col-4">
                    <img src="../img/cross.svg" alt="" />
                </div>
            </div>

            {/* Navbar */}
            <nav className="navbar">
                {/* Logo */}
                <div className="logo">Scentora</div>

                {/* Navigation Links */}
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Brands</a></li>
                </ul>

                {/* Search Bar */}
                <div className="search-bar">
                    <input type="text" placeholder="Search for products..." />
                    <span className="search-icon"><img src="/home/page/assets/icons/search-icon.png" alt="" /></span>
                </div>

                {/* Icons (Wishlist, Cart, Profile) */}
                <div className="icons">
                    <div className="icon wishlist">
                        <span><img src="../assets/icons/Vector.png" alt="" /></span>
                        <span className="badge">2</span>
                    </div>
                    <a href="../cart/cart.jsx">
                        <div className="icon cart">
                            <span><img src="../assets/icons/Cart1.png" alt="" /></span>
                            <span className="badge">4</span>
                        </div>
                    </a>
                    <div className="icon profile">
                        <span><img src="../assets/icons/person.png" alt="" /></span>
                    </div>
                </div>
            </nav>

            <div className="main-content-wrapper">
                {/* Explore Block */}
                <div className="explore-block">
                    <div className="image-container">
                        <img src="../img/img-2.svg" alt="Explore Image" className="full-width-image" />
                    </div>
                </div>

                {/* Our Collections */}
                <div className="collections">
                    <div className="collection-left">
                        <div className="left-box">
                            <div className="filter-main">
                                <p className="top-filter">Filter</p>
                                <p className="top-clear">Clear All</p>
                            </div>
                            <div>
                                <div className="tag">
                                    <span className="tag-text">Armani Code</span>
                                    <img src="../img/x.svg" alt="Close" className="tag-icon" />
                                </div>
                                <div className="d-flex gp-10">
                                    <div className="tag">
                                        <span className="tag-text">Cool water</span>
                                        <img src="../img/x.svg" alt="Close" className="tag-icon" />
                                    </div>
                                    <div className="tag">
                                        <span className="tag-text">CK</span>
                                        <img src="../img/x.svg" alt="Close" className="tag-icon" />
                                    </div>
                                </div>
                                <div className="tag">
                                    <span className="tag-text">Gucci Bloom</span>
                                    <img src="../img/x.svg" alt="Close" className="tag-icon" />
                                </div>
                            </div>

                            <div className="border-bottom">
                                <hr className="hr" />
                            </div>

                            <div className="gender-feild">
                                <div>Gender</div>
                                <img src="../img/right-arrow.svg" alt="" />
                            </div>
                            <div className="gender-feild">
                                <div>Discount</div>
                                <img src="../img/right-arrow.svg" alt="" />
                            </div>
                            <div className="gender-feild">
                                <div>Price</div>
                                <img src="../img/right-arrow.svg" alt="" />
                            </div>

                            <div className="border-bottom">
                                <hr className="hr" />
                            </div>

                            <div className="brand-wrapper">
                                <div className="brand-title">Brands</div>
                                <input type="text" placeholder="   Search Brand" className="search-field" />

                                <div className="checkbox-wrapper">
                                    <label>
                                        <input type="checkbox" className="brand-checkbox" />
                                        Ajmal
                                    </label>
                                </div>
                        
                            </div>
                        </div>
                    </div>

                    {/* Collection Right */}
                    <div className="collection-right">
                        <div className="our-collections">Our Collections</div>
                        <div className="results-info">
                            <div className="results-count">Showing 06 results</div>
                            <div className="sort-by">
                                <span>Sorted by : <b>Popularity</b>
                                    <img className="mt-50" src="../img/down-arrow.svg" alt="" />
                                </span>
                            </div>
                        </div>

                        <div className="class-card">
                            {/* Product Card Example */}
                            <div className="product-card">
                                <div className="text-center image-wrap">
                                    <img src="../img/pf-1.svg" alt="Product" className="product-image" />
                                    <div className="heart-wrapper">
                                        <img src="../img/heart.svg" alt="Heart" className="heart-image" />
                                    </div>
                                </div>

                                <div className="details-block">
                                    <div className="head-1">DAVIDOFF</div>
                                    <p className="sub-head-1">Cool Water Eau De Toilette for Men</p>
                                    <p className="price">$ 40</p>
                                    <a href="../cart/cart.html">
                                        <button className="buy-button">Add to Cart</button>
                                    </a>
                                </div>
                            </div>
                            {/* Additional product cards can follow the same structure */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-brand">
                        <h2>Scentora</h2>
                        <p>
                            We have perfumes that suit your style and which you’re proud to wear.
                        </p>
                        <div className="social-icons">
                            <a href="#"><img src="../assets/icons/twitter.png" alt="" /></a>
                            <a href="#"><img src="../assets/icons/fb2.png" alt="" /></a>
                            <a href="#"><img src="../assets/icons/insta.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;