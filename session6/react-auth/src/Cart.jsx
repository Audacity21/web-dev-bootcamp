import React, { useDebugValue, useEffect } from "react";

const Cart = (props) => {
  const cart = props.cart;
  useEffect(() => {
    console.log(cart);
  }, []);
  return (
    <div>
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
    </div>
  );
};

export default Cart;
