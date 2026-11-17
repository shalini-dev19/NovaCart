import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {

  const cartItems = useSelector((state) => state.cart.items)

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  );

  return (
    <nav>
      <h2>NovaCart</h2>

      <ul>
        <li><Link to="/">Home</Link></li>

        <li><Link to="/products">Products</Link></li>

        <li><Link to="/about">About</Link></li>

        <li>
          <Link to="/cart">Cart ({totalItems})</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar;

