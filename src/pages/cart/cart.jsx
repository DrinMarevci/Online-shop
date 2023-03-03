import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const handleCheckout = async () => {
    await clearCart();
    navigate("/checkout", { state: { totalAmount } });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Your Cart Items</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div className="col mb-4" key={product.id}>
                <CartItem data={product} />
              </div>
            );
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout my-5 py-3 px-4">
          <p className="h4 mb-4">Subtotal: ${totalAmount}</p>
          <div className="d-flex justify-content-between flex-column flex-md-row">
            <button className="btn btn-secondary mb-3 mb-md-0 mr-md-3" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
            <button className="btn btn-primary" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-center my-5">
          Your Shopping Cart is Empty, press the shop button left corner!
        </h1>
      )}
    </div>
  );
};

export default Cart;