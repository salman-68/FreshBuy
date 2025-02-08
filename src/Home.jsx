import { Link } from "react-router-dom";
import VegItems from "./VegItems";

function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero text-center py-5">
                <h1>Welcome to FreshMart – Your Freshness Delivered!</h1>
                <p>Shop the freshest produce, quality groceries, and more, all at the best prices.</p>
            </section>

            {/* Featured Categories Section */}
            <section className="featured-categories py-5">
                <h2 className="text-center">Shop by Category</h2>
                <ul className="category-list d-flex justify-content-center list-unstyled">
                    <li>Fresh Produce</li>
                    <li>Dairy & Eggs</li>
                    <li>Snacks & Beverages</li>
                    <li>Organic Products</li>
                    <li>Bakery Fresh</li>
                    <li>Meat & Seafood</li>
                </ul>
            </section>

            {/* Promotions Section */}
            <section className="promotions py-5">
                <h2 className="text-center">Special Offers</h2>
                <ul className="offer-list list-unstyled">
                    <li>Weekly Discounts on Fresh Vegetables</li>
                    <li>Buy One, Get One Free on Select Snacks</li>
                    <li>Discounted Organic Range This Month</li>
                </ul>
                <div className="text-center">
                    <Link to="/offers">
                        <button className="cta-btn btn btn-primary btn-lg">See All Offers</button>
                    </Link>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us py-5 bg-light">
                <h2 className="text-center">Why Shop at FreshMart?</h2>
                <ul className="list-unstyled">
                    <li>Fresh Produce Delivered Daily</li>
                    <li>Sustainable and Eco-friendly Practices</li>
                    <li>Quality at the Best Prices</li>
                    <li>Easy Online Ordering and Fast Delivery</li>
                </ul>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials py-5 text-center">
                <h2>What Our Customers Say</h2>
                <blockquote className="blockquote">
                    "I love how fresh everything is! FreshMart is my go-to for weekly groceries."
                </blockquote>
            </section>

            {/* Footer */}
            <footer className="d-flex justify-content-center align-items-center py-4 bg-dark">
                <div>
                    <a 
                        href="mailto:salmnakhanmaverick@gmail.com?subject=Hello%20FreshMart&body=Hi%2C%20I%20am%20interested%20in..."
                        className="btn btn-primary btn-lg px-5 py-3 rounded-4 shadow-lg text-white"
                    >
                        Contact For Any Query
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Home;
