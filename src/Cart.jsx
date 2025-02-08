import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, decrement, increment, remove } from "./store";
import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  let pincode = useRef(null);
  let dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [couponCode, setCouponCode] = useState('');
  const [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);
  const [showCouponPaymentDetails, setShowCouponPaymentDetails] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  const handleCouponCode = () => {
    switch (couponCode.toUpperCase()) {
      case 'SADAT10': setCouponDiscountPercentage(10); break;
      case 'SADAT20': setCouponDiscountPercentage(20); break;
      case 'SADAT30': setCouponDiscountPercentage(30); break;
      case 'SADAT40': setCouponDiscountPercentage(40); break;
      case 'SADAT80': setCouponDiscountPercentage(80); break;
      default:
        alert("Invalid Coupon Code");
        setCouponDiscountPercentage(0);
    }
  };

  const couponCodeDiscount = (totalAmount * couponDiscountPercentage) / 100;
  const finalNetAmount = totalAmount - couponCodeDiscount;

  const handlePurchase = () => {
    const purchaseDetail = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      purchaseDetails: [...items],
      totalAmount,
      discountedAmount: couponCodeDiscount,
      finalAmount: finalNetAmount
    };
    dispatch(addPurchaseDetails(purchaseDetail));
    dispatch(clearCart());
    alert('Purchase made successfully!\nThank You For Purchasing');
  };

  const checkDelivery = () => {
    if (pincode.current.value === "500005") {
      setShowAddress(true);
    } else {
      alert("Sorry, we are not delivering at your location.");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-primary fw-bold mb-4">🛒 Your Cart</h1>
      <div className="row">
        {/* 🛒 Cart Items (Left Side) */}
        <div className="col-md-8">
          {items.length > 0 ? items.map((item, index) => (
            <div key={index} className="card mb-3 shadow-sm border-0 rounded">
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={item.image} alt={item.name} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-6 p-3">
                  <h5 className="fw-bold">{item.name} - ₹{item.price}</h5>
                  <p className="text-muted">Quantity: {item.quantity}</p>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-around">
                  <button className="btn btn-outline-success rounded-circle px-3" onClick={() => dispatch(increment(item))}>+</button>
                  <button className="btn btn-outline-warning rounded-circle px-3" onClick={() => dispatch(decrement(item))}>-</button>
                  <button className="btn btn-outline-danger rounded-circle px-3" onClick={() => dispatch(remove(item))}>🗑️</button>
                </div>
              </div>
              
            </div>
            
          )) : <p className="text-muted fs-5">Your cart is empty.</p>}
        </div>

        {/* 📦 Order Summary (Right Side) */}
        <div
          className="order-summary position-sticky p-4 rounded shadow-lg bg-white"
          style={{
            zIndex: 1050,
            top: "15px",
            width: "360px",
            maxHeight: "90vh",
            overflowY: "auto",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
          }}
        >
        <div className="d-flex justify-content-center">
  <button
    className="btn btn-danger"
    onClick={() => dispatch(clearCart())}
  >
    Clear Cart
  </button>
</div>
<br/>
<br/>

          <h4 className="text-center text-primary fw-bold mb-3">🛍️ Order Summary</h4>

          {/* 💰 Total Price */}
          <div className="card p-3 shadow-sm border-0 rounded bg-light mb-3">
            <h5 className="fw-bold text-dark">Total: ₹{totalAmount.toFixed(2)}</h5>
          </div>

          {/* 🎟️ Coupon Section */}
          <div className="card p-3 shadow-sm border-0 rounded mb-3">
            <h5 className="fw-bold text-dark">🎫 Apply Coupon Code</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button className="btn btn-primary w-100 rounded-pill" onClick={() => { handleCouponCode(); setShowCouponPaymentDetails(true); }}>Apply</button>
          </div>

          {/* 🎯 Discount Details */}
          {showCouponPaymentDetails && (
            <div className="card p-3 shadow-sm border-0 rounded bg-light mb-3">
              <p className="fw-bold">Discount Applied: ₹{couponCodeDiscount.toFixed(2)}</p>
              <p className="fw-bold text-success">Final Amount: ₹{finalNetAmount.toFixed(2)}</p>
            </div>
          )}

          {/* 📍 Delivery Check */}
          <div className="card p-3 shadow-sm border-0 rounded mb-3">
            <h5 className="fw-bold text-dark">🚚 Check Delivery</h5>
            <input type="number" className="form-control mb-2" ref={pincode} placeholder="Enter Pincode" />
            <button className="btn btn-dark w-100 rounded-pill" onClick={checkDelivery}>Check</button>
          </div>

          {/* 🏡 Address Section */}
          {showAddress && (
            <div className="card p-3 shadow-sm border-0 rounded bg-light mb-3">
              <p>✅ We are delivering at your location</p>
              <input type="text" className="form-control mb-2" placeholder="Enter Your Address" />
              <button className="btn btn-secondary w-100 rounded-pill">Save Details</button>
            </div>
          )}

          {/* ✅ Purchase Button */}
          <button className="btn btn-success w-100 rounded-pill fs-5" onClick={handlePurchase}>✅ Make Purchase</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
