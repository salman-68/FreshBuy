 
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store";

function MilkItems() {
  const [searchQuery, setSearchQuery] = useState
  ('');

  const dispatch = useDispatch();
  const milkItems = useSelector(state => state.products.milkItems);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter items based on search query
  const filteredItems = milkItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const finalItems = filteredItems.map((item, index) => (
    <li key={index} className="vegItem">
      <img src={item.image} className="vegImage" width="150" height="100" style={{ borderRadius: "5px" }} />
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
      <h1 className="heading">Milk Items</h1>
      
      {/* Search bar */}
      <div className="search-container">
        <input 
          type="text" 
          value={searchQuery} 
          onChange={handleSearch} 
          placeholder="Search Milk Items..." 
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

export default MilkItems;
