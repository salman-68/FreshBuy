import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store";
import "./App.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./Home";
import VegItems from "./VegItems";
import NonVegItems from "./NonVegItems";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Orders from "./Orders";
import MilkItems from "./MilkItems";
import Login from "./Login";
import OffersPage from "./OffersPage";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <nav className="nav-links">
            <Link to="/home" onClick={closeSidebar}>
              <i className="fas fa-home"></i> Home
            </Link>
            <Link to="/veg" onClick={closeSidebar}>
              <i className="fas fa-leaf"></i> Veg Items
            </Link>
            <Link to="/nonvegitems" onClick={closeSidebar}>
              <i className="fas fa-drumstick-bite"></i> Non-Veg Items
            </Link>
            <Link to="/milkItems" onClick={closeSidebar}>
              <i className="fas fa-glass-whiskey"></i> Milk Items
            </Link>
            <Link to="/orders" onClick={closeSidebar}>
              <i className="fas fa-box"></i> Orders
            </Link>
            <Link to="/contactus" onClick={closeSidebar}>
              <i className="fas fa-envelope"></i> Contact Us
            </Link>
            <Link to="/cart" onClick={closeSidebar}>
              <i className="fas fa-shopping-cart"></i> Cart <span className="cart-count">{totalItems}</span>
            </Link>
            {isAuthenticated ? (
              <div className="auth-section">
                <span>Welcome, {user}</span>
                <button className="logout-btn" onClick={() => dispatch(logout())}>Logout</button>
              </div>
            ) : (
              <Link to="/login" onClick={closeSidebar}>
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            )}
          </nav>
        </div>

        {/* Main Content */}
        <div className={`main-content ${sidebarOpen ? "shrink" : ""}`}>
          {/* Menu Button */}
          <button className="menu-btn" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/veg" element={<VegItems />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/nonvegitems" element={<NonVegItems />} />
            <Route path="/milkItems" element={<MilkItems />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
