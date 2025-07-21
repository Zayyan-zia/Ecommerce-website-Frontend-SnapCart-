function Aboutus(){
    return<>
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero">
        <h1>About <span>SnapCart</span></h1>
        <p>Your one-stop shop for the best deals on products you love.</p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="image-container">
        </div>
        <div className="text-content">
          <h2>Our Mission</h2>
          <p>To make shopping easy, affordable, and trustworthy for every customer.</p>
          <h2>Our Vision</h2>
          <p>To become the most loved and reliable eCommerce platform worldwide.</p>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose SnapCart</h2>
        <div className="feature-boxes">
          <div className="feature">
            <div className="icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>We ensure your products arrive quickly and safely.</p>
          </div>
          <div className="feature">
            <div className="icon">🔐</div>
            <h3>Secure Payment</h3>
            <p>All transactions are encrypted and secure.</p>
          </div>
          <div className="feature">
            <div className="icon">↩️</div>
            <h3>Easy Returns</h3>
            <p>No-hassle return policy for your convenience.</p>
          </div>
          <div className="feature">
            <div className="icon">💬</div>
            <h3>24/7 Support</h3>
            <p>We’re here to help, anytime you need us.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to explore amazing products?</h2>
        <a href="/products" className="cta-button">Browse Products</a>
      </section>
    </div>
    </>
}
export default Aboutus;