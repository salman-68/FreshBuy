import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Orders() {
  // Fetch purchase history from the Redux state
  const purchaseHistory = useSelector((state) => state.purchaseDetails);
  let dispatch = useDispatch();

  // Reorder function: dispatching each item from purchaseDetails to the cart
  const handleReorder = (purchaseDetails) => {
    purchaseDetails.forEach((item) => {
      dispatch(addToCart(item)); // Dispatching an action to add the item back to the cart
    });
  };

  return (
    <div className="container my-5">
     <h1 className="text-center text-white my-4 display-3 font-weight-bold bg-dark py-4 rounded shadow-lg">Purchase History</h1>

      {purchaseHistory.length === 0 ? (
        <p className="text-center text-muted">No purchase history available.</p>
      ) : (
        <div className="row">
          {purchaseHistory.map((purchase, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm border-light h-100">
                <div className="card-body d-flex flex-column min-vh-50">
                  <h5 className="card-title">
                    <span className="badge bg-secondary">Order #{index + 1}</span>
                  </h5>
                  <div className="d-flex justify-content-between mb-3">
                    <p className="text-muted mb-0">
                      <strong>Date:</strong> {purchase.date}
                    </p>
                    <p className="text-muted mb-0">
                      <strong>Time:</strong> {purchase.time}
                    </p>
                  </div>

                  {/* Scrollbar only for more than 5 items */}
                  <ul
  className="list-group list-group-flush flex-grow-1 overflow-auto"
  style={{ maxHeight: "200px" }} // Fixed height for consistency
>
  {purchase.purchaseDetails.map((item, itemIndex) => (
    <li key={itemIndex} className="list-group-item d-flex align-items-center">
      <img
        src={item.image}
        alt={item.name}
        className="rounded-circle me-3"
        style={{ width: "50px", height: "50px" }}
      />
      <div>
        <strong>{item.name}</strong> - ₹{item.price} x {item.quantity}
      </div>
    </li>
  ))}
</ul>


                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <p className="fw-bold mb-0">Total Amount:</p>
                    <p className="text-success fs-5 fw-bold mb-0">₹{purchase.finalAmount.toFixed(2)}</p>
                  </div>

                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleReorder(purchase.purchaseDetails)}
                    >
                      Reorder
                    </button>
                    <button className="btn btn-outline-info btn-sm">Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
