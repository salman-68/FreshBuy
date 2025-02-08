 import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store";
import "./App.css"; 
import 'swiper/css/bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
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
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <header className="navbar">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="logo">FreshMart</h1>
          <nav>
            <Link to="/home" className="nav-link">
              <i className="fas fa-home"></i> Home
            </Link>
            <Link to="/veg" className="nav-link">
              <i className="fas fa-leaf"></i> Veg Items
            </Link>
            <Link to="/nonvegitems" className="nav-link">
              <i className="fas fa-drumstick-bite"></i> Non-Veg Items
            </Link>
            <Link to="/milkItems" className="nav-link">
              <i className="fas fa-glass-whiskey"></i> Milk Items
            </Link>
            <Link to="/orders" className="nav-link">
              <i className="fas fa-box"></i> Orders
            </Link>
            <Link to="/contactus" className="nav-link">
              <i className="fas fa-envelope"></i> Contact Us
            </Link>
            <Link to="/cart" className="nav-link cart-link">
              <i className="fas fa-shopping-cart"></i> Cart <span className="cart-count">{totalItems}</span>
            </Link>
            {isAuthenticated ? (
              <div className="d-flex align-items-center justify-content-end gap-3">
                <span>Welcome, {user}</span>
                <button onClick={() => dispatch(logout())}>Logout</button>
              </div>
            ) : (
              <Link to="/login" className="nav-link">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="content" style={{ padding: '20px', marginTop: '20px', minHeight: '80vh' }}>
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
</main>

    </BrowserRouter>
  );
}

export default App;  