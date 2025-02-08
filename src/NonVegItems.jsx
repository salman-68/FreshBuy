import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "./store";
import { useState } from "react";

function NonVegItems() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const nonVegItems = useSelector(state => state.products.nonVeg);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter items based on search query
  const filteredItems = nonVegItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const finalItems = filteredItems.map((item, index) => (
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

  return (
    <div className="main">
      <h1 className="heading">Non-Veg Items</h1>
      {/* Search Bar */}
      <div className="search-container">
        <input 
          type="text" 
          value={searchQuery} 
          onChange={handleSearch} 
          placeholder="Search for non-veg items..." 
          className="search-bar"
        />
      </div>

      {filteredItems.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul className="vegList">{finalItems}</ul>
      )}
    </div>
  );
}

export default NonVegItems;
