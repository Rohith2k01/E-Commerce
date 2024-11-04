"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./cart.module.css"; 

const CartPage = () => {
  const [quantity, setQuantity] = useState([1, 1, 1, 2]); // Quantities for each item
  const [showPopup, setShowPopup] = useState([false, false, false]);
  const [showBanner, setShowBanner] = useState(true);

  const increaseQty = (index) => {
    const updatedQuantity = [...quantity];
    updatedQuantity[index] += 1;
    setQuantity(updatedQuantity);
  };

  const decreaseQty = (index) => {
    const updatedQuantity = [...quantity];
    if (updatedQuantity[index] > 1) updatedQuantity[index] -= 1;
    setQuantity(updatedQuantity);
  };

  const togglePopup = (index) => {
    const updatedPopup = [...showPopup];
    updatedPopup[index] = !updatedPopup[index];
    setShowPopup(updatedPopup);
  };

  const closeBanner = () => setShowBanner(false);

  return (
    <div>
      {showBanner && (
        <div className={styles.topBanner}>
          Sign up and get 20% off on your first order. <a href="#">Sign Up Now</a>
          <span className={styles.closeBanner} onClick={closeBanner}>
            &times;
          </span>
        </div>
      )}

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>Scentora</div>
        <ul className={styles.navLinks}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Brands</a></li>
        </ul>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search for products..." />
          <span className={styles.searchIcon}>
            <Image src="/icons/search-icon.png" alt="Search" width={20} height={20} />
          </span>
        </div>
        <div className={styles.icons}>
          {/* Icons */}
        </div>
      </nav>

      {/* Breadcrumb */}
      <section className={styles.breadcrumbSection}>
        <div className={styles.breadcrumb}>
          <a href="#">Home </a>  <a href="#">Cart</a>
        </div>
      </section>

      <div className={styles.productCount}>
        <h2>{quantity.reduce((a, b) => a + b, 0)} Items</h2>
      </div>

      <div className={styles.cartContainer}>
        <div className={styles.productList}>
          {[
            { name: "DAVIDOFF", desc: "Cool Water Eau De Toilette for Men", price: 360, image: "/icons/image1.png", offer: "Buy 1 Get 1 Free" },
            { name: "ARMANI", desc: "Acqua di Gio Profumo for Men", price: 400, image: "/icons/image2.png", offer: "Buy 2 Get 1 Free" },
            { name: "CHANEL", desc: "Bleu de Chanel Eau De Parfum", price: 320, image: "/icons/image3.png" },
            { name: "VERSACE", desc: "Dylan Blue Eau De Toilette for Men", price: 310, image: "/icons/image4.png" }
          ].map((product, index) => (
            <div key={index} className={styles.productContainer}>
              <div className={styles.productItem}>
                <Image src={product.image} alt={product.name} width={100} height={100} />
                <div className={styles.productDetails}>
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <p className={styles.price}>${product.price}</p>
                  {product.offer && (
                    <div className={styles.pop}>
                      <p className={styles.offer} onClick={() => togglePopup(index)}>
                        1 Offer Available
                      </p>
                      {showPopup[index] && (
                        <div className={styles.offerPopup}>
                          <p><strong>Offers Applied</strong></p>
                          <p>{product.offer}</p>
                          <button onClick={() => togglePopup(index)}>Close</button>
                        </div>
                      )}
                    </div>
                  )}
                  <div className={styles.quantityControls}>
                    <button onClick={() => decreaseQty(index)}>-</button>
                    <span>Qty: {String(quantity[index]).padStart(2, "0")}</span>
                    <button onClick={() => increaseQty(index)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className={styles.orderSummary}>
          <h3>Order Details</h3>
          <div className={styles.summaryItem}>
            <span>Bag total</span>
            <span>$1390</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Discount</span>
            <span className={styles.discount}>- $450</span>
          </div>
          <p className={styles.offersApplied} onClick={() => setShowPopup((prev) => [true, ...prev.slice(1)])}>
            3 offers Applied <span className={styles.infoIcon}>i</span>
          </p>
          <div className={styles.summaryItem}>
            <span>Total</span>
            <span>$940</span>
          </div>
          <p className={styles.congratsMessage}>Congratulations! You've Saved $450 today!</p>
          <button className={styles.checkoutBtn}>Go to Checkout</button>
        </div>
      </div>

      {/* Footer */}
      <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <h2>Scentora</h2>
        <p>
          We have perfumes that suits your <br />style and which you’re proud.
        </p>
        <div class="social-icons">
          <a href="#"><img src="../assets/icons/twitter.png" alt="" /></a>
          <a href="#"><img src="../assets/icons/fb2.png" alt="" /></a>
          <a href="#"><img src="../assets/icons/insta.png" alt="" /></a>
          <a href="#"><img src="../assets/icons/git.png" alt="" /></a>
        </div>
      </div>

      <div class="footer-links">
        <div class="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Help</h3>
          <ul>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>FAQ</h3>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Manage Deliveries</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>Scentora © 2000-2023, All Rights Reserved</p>
      <div class="payment-icons">
        <img src="../assets/icons/visa.png" alt="Visa" />
        <img src="../assets/icons/master.png" alt="MasterCard" />
        <img src="../assets/icons/paypal.png" alt="PayPal" />
        <img src="../assets/icons/applepay.png" alt="Apple Pay" />
        <img src="../assets/icons/gpay.png" alt="Google Pay" />
      </div>
    </div>
  </footer>
    </div>
  );
};

export default CartPage;