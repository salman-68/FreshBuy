import { useDispatch } from "react-redux";
import { addToCart, decrement, increment } from "./store";
import { useState, useEffect } from "react";
import "./VegItems.css";  // Assuming this CSS will style both VegItems and OffersPage

const OffersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOfferActive, setIsOfferActive] = useState(true);
  const [remainingTime, setRemainingTime] = useState(60);  // 10 minutes timer

  const offers = [
    { name: "Snacks", price: 50, image: "snacks.jpeg" },
    { name: "Cakes", price: 500, image: "cakes.jpeg" },
    { name: "Spices", price: 250, image: "spices.jpeg" },
    { name: "Vegetables", price: 100, image: "veggies.jpeg" },
    { name: "Fruits", price: 150, image: "fruits.jpeg" },
    { name: "Milk", price: 60, image: "milk.jpeg" },
    { name: "Cheese", price: 120, image: "cheese.jpeg" },
    { name: "Bread", price: 100, image: "bread.jpeg" },
    { name: "Butter", price: 175.69, image: "butter.jpeg" },
    { name: "Eggs", price: 67, image: "eggs.jpeg" },
    { name: "Juice", price: 120, image: "juice.jpeg" },
    { name: "Cookies", price: 90, image: "cookies.jpeg" },
    { name: "Chocolates", price: 600, image: "ferro.jpeg" },
    { name: "Frozen Meals", price: 350, image: "frozen.jpeg" },
    { name: "Noodles", price: 100, image: "noodles.jpeg" },
    { name: "Pasta", price: 80, image: "pasta.jpeg" },
    { name: "Sauce", price: 130, image: "sauce.jpeg" },
    { name: "Olive Oil", price: 1000.00, image: "olive.jpeg" },
    { name: "Cereals", price: 435.00, image: "cereals.jpeg" },
    { name: "Yogurt", price: 20, image: "yogurt.jpeg" },
    { name: "Ice Cream", price: 350, image: "icecream.jpeg" },
    { name: "Tea", price: 300, image: "tea.jpeg" },
    { name: "Coffee", price: 250, image: "cofee.jpeg" },
    { name: "Soda", price: 20, image: "soda.jpeg" },
    { name: "Chips", price: 60, image: "chips.jpeg" },
    { name: "Condiments", price: 50, image: "condiments.jpeg" },
    { name: "Herbs", price: 100, image: "herbs.jpeg" },
    { name: "Beverages", price: 239, image: "beverages.jpeg" },
    { name: "Fresh Herbs", price: 29.9, image: "fherbs.jpeg" },
    { name: "Baking Supplies", price: 230.99, image: "bakingsupplies.jpeg" },
    { name: "Cleaning Products", price: 199.99, image: "cleaningessentials.jpeg" },
    { name: "Pet Food", price: 190.09, image: "pet.jpeg" },
  ];

  const dispatch = useDispatch();

  // Filter offers based on search query
  const filteredOffers = offers.filter(offer =>
    offer.name && offer.name.toLowerCase().includes(searchQuery.toLowerCase()) // Ensure offer.name is defined
  );

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsOfferActive(false);
    }
  }, [remainingTime]);

  const handleClaimOffer = () => {
    if (isOfferActive) {
      alert('Offer Claimed!');
      setIsOfferActive(false);
    } else {
      alert('Offer has expired!');
    }
  };

  const offerItems = filteredOffers.map((offer, index) => (
    <li key={index} className="vegItem">
      <div className="badge bg-danger text-white position-absolute top-0 end-0 m-2">SALE</div>
      <img src={offer.image} width="80" height="80" className="vegImage" alt={offer.name} />
      <p className="itemName">{offer.name} - ₹{offer.price}</p>
      <div className="cartControls">
        <button className="decrement" onClick={() => dispatch(decrement(offer))}>-</button>
        <button className="increment" onClick={() => dispatch(increment(offer))}>+</button>
        <button className="addToCart" onClick={() => dispatch(addToCart(offer))}>Add to Cart</button>
      </div>
    </li>
  ));

  return (
    <div className="main">
      <h1 className="heading">Special Offers</h1>

      {/* Search bar */}
      <div className="search-container">
        <input 
          type="text" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search Offers..." 
          className="search-bar"
        />
      </div>
      
      {isOfferActive ? (
        <div>
          <p className="text-center">Time remaining: {remainingTime}s</p>
          {filteredOffers.length === 0 ? (
            <p className="text-center">No offers found</p>
          ) : (
            <ul className="vegList">{offerItems}</ul>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h3>Offer Expired</h3>
          <p>Sorry, the offer is no longer available.</p>
        </div>
      )}
    </div>
  );
};

export default OffersPage;
