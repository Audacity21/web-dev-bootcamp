import React, { useDebugValue, useEffect } from "react";
import { Button } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js"; 

const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = Object.entries(cart).reduce((total, [key, item]) => {
    return total + item.price * item.quantity;
  }, 0);

  const stripePromise = loadStripe(""); //replace wit your own public key

  const handleCheckout = async () => {
    const response = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers : {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: Object.entries(cart).map(([key, item]) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity
        }))
      })
    });

    const session = await response.json();
    console.log("session id: ", session.id);

    const stripe = await stripePromise;
    console.log("Promise: ", stripe);
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if(error){
      console.log("Stripe checkout error: ", error);
    }
  }
  return (
    <div>
      <h1>Cart</h1>
      <h1>Total: {totalPrice}</h1>
      <ul>
        {Object.keys(cart).length > 0 ? (
          Object.entries(cart).map(([key, item]) => {
            return (
              <li key={key}>
                {item.name} - Rs. {item.price} x {item.quantity}
              </li>
            );
          })
        ) : (
          <h1>No items to display</h1>
        )}
      </ul>
      <Button onClick={handleCheckout}>Checkout</Button>
    </div>
  );
};

export default Cart;
