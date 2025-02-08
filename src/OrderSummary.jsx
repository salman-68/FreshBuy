import { useState, useRef } from "react";

function OrderSummary({ totalAmount, handleCouponCode, couponCode, setCouponCode, couponCodeDiscount, finalNetAmount, checkDelivery, showAddress, handlePurchase }) {
  let pincode = useRef(null);
  const [showCouponPaymentDetails, setShowCouponPaymentDetails] = useState(false);

  return (
    <div className="position-fixed top-0 end-0 mt-3 me-3 p-3 shadow-lg bg-white rounded"
      style={{
        width: "350px",
        maxHeight: "80vh",
        overflowY: "auto",
        zIndex: 1050, // 🛠 Fix: Ensure it's above other components
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" // 🛠 Fix: Add shadow for better visibility
      }}>
      <h4 className="text-center text-primary">Order Summary</h4>

      {/* Total Price */}
      <div className="card p-3 shadow-sm mb-3">
        <h5>Total: ₹{totalAmount.toFixed(2)}</h5>
      </div>

      {/* Coupon Section */}
      <div className="card p-3 shadow-sm mb-3">
        <h5>Apply Coupon Code</h5>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button className="btn btn-info w-100" onClick={() => { handleCouponCode(); setShowCouponPaymentDetails(true); }}>Apply</button>
      </div>

      {/* Show Discount Details */}
      {showCouponPaymentDetails && (
        <div className="card p-3 shadow-sm mb-3">
          <p><strong>Discount Applied:</strong> ₹{couponCodeDiscount.toFixed(2)}</p>
          <p><strong>Final Amount:</strong> ₹{finalNetAmount.toFixed(2)}</p>
        </div>
      )}

      {/* Address Check Section */}
      <div className="card p-3 shadow-sm mb-3">
        <h5>Check Delivery</h5>
        <input type="number" className="form-control mb-2" ref={pincode} placeholder="Enter Pincode" />
        <button className="btn btn-dark w-100" onClick={checkDelivery}>Check</button>
      </div>

      {/* Show Address Details if Available */}
      {showAddress && (
        <div className="card p-3 shadow-sm mb-3">
          <p>We are delivering at your location</p>
          <input type="text" className="form-control mb-2" placeholder="Enter Your Address" />
          <button className="btn btn-secondary w-100">Save Details</button>
        </div>
      )}

      {/* Purchase Button */}
      <button className="btn btn-success w-100 mb-2" onClick={handlePurchase}>Make Purchase</button>
    </div>
  );
}

export default OrderSummary;
