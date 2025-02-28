import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, addToCart } from "./store";
import { useNavigate } from "react-router-dom";

function MilkItems() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isShaking, setIsShaking] = useState(false);
  const itemsPerPage = 8;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get Milk Items from Redux store
  const milkItems = useSelector(state => state.products.milkItems) || [];
  const cartItems = useSelector(state => state.cart);

  // Search Filter
  const filteredItems = milkItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="main">
      <h1 className="text-center text-white my-4 display-3 font-weight-bold bg-dark py-4 rounded shadow-lg">
        Milk Items
      </h1>

      {/* Search Bar */}
      <div className="search-container d-flex align-items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search for milk items..."
          className="search-bar form-control mb-4"
        />
      </div>

      {filteredItems.length === 0 ? (
        <p className="no-items-found text-center mt-4">No items found</p>
      ) : (
        <>
          {/* Items List */}
          <ul className="vegList">
            {currentItems.map((item, index) => {
              const cartItem = cartItems.find(cartItem => cartItem.name === item.name);

              return (
                <li key={index} className="vegItem">
                  <img src={item.image} width="80" height="80" className="vegImage" alt={item.name} />
                  <p className="itemName">{item.name} - ₹{item.price}</p>
                  <div className="cartControls">
                  {cartItem ? (
                  <>
                  <button className="decrement" onClick={() => dispatch(decrement(item))}>-</button>
                   <span className="quantity">{cartItem.quantity}</span>
                   <button className="increment" onClick={() => dispatch(increment(item))}>+</button>
                 </>
                ) : (
                      <button
                        className="addToCart"
                        onClick={() => {
                          dispatch(addToCart(item));
                          setIsShaking(true);
                          setTimeout(() => setIsShaking(false), 500);
                        }}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Pagination */}
          <div className="pagination-controls text-center mt-4">
            <button
              className="btn btn-secondary mx-2"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`btn mx-2 ${currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="btn btn-secondary mx-2"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Floating Cart Button */}
      <button className={`cart-button ${isShaking ? "shake" : ""}`} onClick={() => navigate("/cart")}>
        🛒  
      </button>

      <p className="copyright-text">© 2025 Fresh Mart. All rights reserved.</p>
    </div>
  );
}

export default MilkItems;
