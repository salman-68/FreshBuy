import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
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
import Admin from "./Admin";
import AdminContactList from "./AdminContactList";
import Registration from "./Registrations.jsx";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("username") || null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const handleLogin = (user) => {
    localStorage.setItem("username", user);
    setUsername(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <nav className="nav-links">
            <Link to="/home" onClick={closeSidebar}><i className="fas fa-home"></i> Home</Link>
            <Link to="/veg" onClick={closeSidebar}><i className="fas fa-leaf"></i> Veg Items</Link>
            <Link to="/nonvegitems" onClick={closeSidebar}><i className="fas fa-drumstick-bite"></i> Non-Veg Items</Link>
            <Link to="/milkItems" onClick={closeSidebar}><i className="fas fa-glass-whiskey"></i> Milk Items</Link>
            <Link to="/orders" onClick={closeSidebar}><i className="fas fa-box"></i> Orders</Link>
            <Link to="/contactus" onClick={closeSidebar}><i className="fas fa-envelope"></i> Contact Us</Link>
            <Link to="/cart" onClick={closeSidebar}><i className="fas fa-shopping-cart"></i> Cart</Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className={`main-content ${sidebarOpen ? "shrink" : ""}`}>
          {/* Navbar */}
          <div className="navbar">
            {/* Menu Button */}
            <button className="menu-btn" onClick={toggleSidebar}>
              <i className="fas fa-bars"></i>
            </button>

            {/* Logo */}
            <img src="/fresh.png" alt="Logo" className="logo" />

            {/* Login/Logout Section */}
            <div className="auth-section">
              {username ? (
                <div className="user-box">
                  <span>Hi, {username} 👋</span>
                  <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <Link to="/login" className="login-link"><i className="fas fa-sign-in-alt"></i> Login</Link>
              )}
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/veg" element={<VegItems />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/contacts" element={<AdminContactList />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/registrations" element={<Registration />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/nonvegitems" element={<NonVegItems />} />
            <Route path="/milkItems" element={<MilkItems />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
