import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "./store";
import { useState } from "react";

function VegItems() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);  // State for current page
  const itemsPerPage = 8;  // Number of items per page

  const dispatch = useDispatch();
  const vegItems = useSelector(state => state.products.veg);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter items based on search query
  const filteredItems = vegItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the index of the first and last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the filteredItems to show only the items for the current page
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const finalItems = currentItems.map((item, index) => (
    <li key={index} className="vegItem">
      <img src={item.image} width="80" height="80" className="vegImage" alt={item.name} />
      <p className="itemName">{item.name} - ₹{item.price}</p>
      <div className="cartControls">
        <button className="decrement" onClick={() => dispatch(decrement(item))}>-</button>
        <button className="increment" onClick={() => dispatch(increment(item))}>+</button>
        <button className="addToCart" onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
      </div>
    </li>
  ));

  // Calculate total pages
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle next and previous buttons
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="main">
      <h1 className="text-center text-white my-4 display-3 font-weight-bold bg-dark py-4 rounded shadow-lg">Veg Items</h1>

      {/* Search Bar */}
      <div className="search-container d-flex align-items-center">
        <input 
          type="text" 
          value={searchQuery} 
          onChange={handleSearch} 
          placeholder="Search for veg items..." 
          className="search-bar form-control mb-4" 
        />
      </div>

      {filteredItems.length === 0 ? (
        <p className="no-items-found text-center mt-4">No items found</p>
      ) : (
        <>
          <ul className="vegList">{finalItems}</ul>
           <br/><br/>
          {/* Pagination Controls */}
          <div className="pagination-controls text-center">
            <button 
              className="btn btn-secondary mx-2" 
              onClick={handlePrevious} 
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button 
                key={index + 1} 
                className={`btn mx-2 ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline-primary'}`} 
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button 
              className="btn btn-secondary mx-2" 
              onClick={handleNext} 
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          <p className="copyright-text">© 2025 Fresh Mart. All rights reserved.</p>

        </>
      )}
    </div>
  );
}

export default VegItems;
