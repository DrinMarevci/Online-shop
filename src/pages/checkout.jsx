import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const location = useLocation();
  const totalAmount = location.state.totalAmount;

  const navigate = useNavigate();

   return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4" >Checkout</h1>
      <p className="lead text-center mb-5">Total: ${totalAmount}</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mr-3" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
        <button className="btn btn-success">Confirm</button>
      </div>
    </div>
  );
};

export default Checkout;
