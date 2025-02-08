import { useState } from "react";

function Header({ showSearchBar = true }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">FreshMart</h1>
        <nav>
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/veg" className="nav-link">Veg Items</Link>
          <Link to="/contactus" className="nav-link">Contact Us</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>
        
        {showSearchBar && (
          <div className="search-container">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for products..."
              className="search-bar"
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
