import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "./store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NonVegItems() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isShaking, setIsShaking] = useState(false); // State for shake animation
  const itemsPerPage = 8;

  const dispatch = useDispatch();
  const nonVegItems = useSelector(state => state.products.nonVeg) || []; // Ensure nonVegItems is not undefined
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  // Filter items based on search query
  const filteredItems = nonVegItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const finalItems = currentItems.map((item, index) => (
    <li key={index} className="vegItem">
      <img src={item.image} width="80" height="80" className="vegImage" alt={item.name} />
      <p className="itemName">{item.name} - ₹{item.price}</p>
      <div className="cartControls">
        <button className="decrement" onClick={() => dispatch(decrement(item))}>-</button>
        <button className="increment" onClick={() => dispatch(increment(item))}>+</button>
        <button 
          className="addToCart" 
          onClick={() => {
            dispatch(addToCart(item));
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500); // Shake animation effect
          }}
        >
          Add to Cart
        </button>
      </div>
    </li>
  ));

  // Pagination handlers
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePrevious = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="main">
      <h1 className="text-center text-white my-4 display-3 font-weight-bold bg-dark py-4 rounded shadow-lg">
        Non-Veg Items
      </h1>

      {/* Search Bar */}
      <div className="search-container d-flex align-items-center">
        <input 
          type="text" 
          value={searchQuery} 
          onChange={handleSearch} 
          placeholder="Search for non-veg items..." 
          className="search-bar form-control mb-4" 
        />
      </div>

      {filteredItems.length === 0 ? (
        <p className="no-items-found text-center mt-4">No items found</p>
      ) : (
        <>
          <ul className="vegList">{finalItems}</ul>

          {/* Pagination Controls */}
          <div className="pagination-controls text-center mt-4">
            <button className="btn btn-secondary mx-2" onClick={handlePrevious} disabled={currentPage === 1}>
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button 
                key={index + 1} 
                className={`btn mx-2 ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline-primary'}`} 
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button className="btn btn-secondary mx-2" onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
      
      <p className="copyright-text">© 2025 Fresh Mart. All rights reserved.</p>

      {/* Floating Cart Button with Shake Animation */}
      <button className={`cart-button ${isShaking ? "shake" : ""}`} onClick={() => navigate('/cart')}>
        🛒  
      </button>
    </div>
  );
}

export default NonVegItems;
