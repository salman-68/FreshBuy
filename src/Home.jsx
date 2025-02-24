import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            {/* Hero Section with Background Image */}
            <section className="hero text-center py-5 bg-primary text-white" 
         style={{ 
              backgroundImage: 'url(https://via.placeholder.com/1600x800)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              backgroundBlendMode: 'overlay', 
              position: 'relative' 
             }}>
        <div className="container position-relative z-index-1">
             <h1 className="display-4 fw-bold text-shadow">Welcome to FreshMart – Your Freshness Delivered!</h1>
             <p className="lead fs-4 text-shadow">Shop the freshest produce, quality groceries, and more, all at the best prices.</p>
             <Link to="/veg" className="btn btn-lg btn-info rounded-pill px-5 mt-4 shadow-lg">Start Shopping</Link>
             </div>
      </section>

            {/* Featured Categories Section with Cards */}
            <section className="featured-categories py-5">
                <div className="container">
                    <h2 className="text-center mb-4 display-5">Shop by Category</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="card border-0 shadow-sm bg-light rounded-3">
                                <img 
                                    src="freshproduce.jpeg" 
                                    alt="Fresh Produce" 
                                    className="card-img-top rounded-top img-fluid" 
                                    style={{ height: '200px', objectFit: 'cover' }} 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Fresh Produce</h5>
                                    <p className="card-text">The best and freshest produce delivered to your door.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="card border-0 shadow-sm bg-light rounded-3">
                                <img 
                                    src="dairyandeggs.jpeg" 
                                    alt="Dairy & Eggs" 
                                    className="card-img-top rounded-top img-fluid" 
                                    style={{ height: '200px', objectFit: 'cover' }} 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Dairy & Eggs</h5>
                                    <p className="card-text">High-quality dairy products and fresh eggs from local farms.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="card border-0 shadow-sm bg-light rounded-3">
                                <img 
                                    src="/snaksand.jpeg" 
                                    alt="Snacks & Beverages" 
                                    className="card-img-top rounded-top img-fluid" 
                                    style={{ height: '200px', objectFit: 'cover' }} 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Snacks & Beverages</h5>
                                    <p className="card-text">A wide variety of snacks and refreshing beverages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotions Section with Hover Effect */}
            <section className="promotions py-5 bg-info text-white">
                <div className="container">
                    <h2 className="text-center mb-4">Special Offers</h2>
                    <ul className="offer-list list-unstyled fs-5">
                        <li className="promotion-item text-info mb-3 p-3 rounded-3 shadow-sm bg-light" style={{ textAlign: "center" }}>
                            Weekly Discounts on Fresh Vegetables
                        </li>
                        <li className="promotion-item text-info mb-3 p-3 rounded-3 shadow-sm bg-light" style={{ textAlign: "center" }}>
                            Buy One, Get One Free on Select Snacks
                        </li>
                        <li className="promotion-item text-info mb-3 p-3 rounded-3 shadow-sm bg-light" style={{ textAlign: "center" }}>
                            Discounted Organic Range This Month
                        </li>
                    </ul>
                    <div className="text-center mt-4">
                        <Link to="/offers">
                            <button className="cta-btn btn btn-lg btn-warning rounded-pill shadow-lg">See All Offers</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section with Iconography */}
            <section className="why-choose-us py-5">
                <div className="container bg-light p-4 rounded-3 shadow-sm">
                    <h2 className="text-center mb-4 display-5">Why Shop at FreshMart?</h2>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <i className="fas fa-leaf fa-3x text-success mb-3"></i>
                            <p>Fresh Produce Delivered Daily</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <i className="fas fa-recycle fa-3x text-primary mb-3"></i>
                            <p>Sustainable and Eco-friendly Practices</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <i className="fas fa-thumbs-up fa-3x text-warning mb-3"></i>
                            <p>Quality at the Best Prices</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <i className="fas fa-truck fa-3x text-danger mb-3"></i>
                            <p>Easy Online Ordering and Fast Delivery</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section with Fade-in Animation */}
            <section className="testimonials py-5 text-center bg-dark text-white" data-aos="fade-up" data-aos-duration="1500">
                <div className="container">
                    <h2 className="mb-4">What Our Customers Say</h2>
                    <blockquote className="blockquote">
                        <p className="mb-0">"I love how fresh everything is! FreshMart is my go-to for weekly groceries."</p>
                        <footer className="blockquote-footer">Salman Khan</footer>
                    </blockquote>
                </div>
            </section>

            {/* Footer with Gradient Button */}
            <footer className="d-flex justify-content-center align-items-center py-4 bg-dark">
                <div>
                    <a 
                        href="mailto:salmnakhanmaverick@gmail.com?subject=Hello%20FreshMart&body=Hi%2C%20I%20am%20interested%20in..."
                        className="btn btn-lg text-white px-5 py-3 rounded-4 shadow-lg"
                        style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b)" }}
                    >
                        Contact For Any Query
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Home;
