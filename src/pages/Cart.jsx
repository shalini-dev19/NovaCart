import { useSelector, useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../redux/cartSlice";

import "./Cart.css";

function Cart() {

  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
  (total, item) =>
    total + (Number(item.priceCents) || 0) / 100 * item.quantity,
  0
);

  return (
    <div className="cart-container">

      <h1>My Cart</h1>

      {cartItems.length === 0 ? (

        <h2 className="empty-cart">Your Cart is Empty</h2>

      ) : (

        <div className="cart-layout">

          <div className="cart-products">

            {cartItems.map((item) => (

              <div className="cart-card" key={item.id}>

                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-image"
                />

                <div className="cart-details">

                  <h3>{item.title}</h3>

<p>Price: ₹{(Number(item.priceCents) || 0) / 100}</p>

                  <div className="quantity-controls">

                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => dispatch(increaseQuantity(item.id))}>
                      +
                    </button>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="order-summary">

            <h2>Order Summary</h2>

            <h3>Total Items: {totalPrice === 0 ? 0 : cartItems.reduce((total, item) => total + item.quantity, 0)}</h3>

            <h2>Total: ₹{totalPrice.toFixed(2)}</h2>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;

