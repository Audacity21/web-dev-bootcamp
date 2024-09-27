import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Cart from "./Cart";

const App = () => {
  const [name, setName] = useState();
  const [cart, setCart] = useState({});
  const value = "Ankit";
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      //console.log(parsedUser);
      setName(parsedUser.displayName);
    }
  }, []);
  const products = [
    {
      name: "Biryani",
      price: 250,
    },
    {
      name: "Rice",
      price: 100,
    },
  ];
  const handleAdd = (item) => {
    let newItem = { ...cart };
    if (newItem[item.name]) newItem[item.name].quantity += 1;
    else newItem[item.name] = { ...item, quantity: 1 };
    console.log(cart);
    setCart(newItem);
  };
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
        {products.map((item) => {
          return (
            <Card style={{ margin: "10px" }}>
              <CardContent
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <Typography>{item.name}</Typography>
                  <Typography>{item.price}</Typography>
                </div>
                <Button onClick={() => handleAdd(item)}>Add to Cart</Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Cart cart={cart} />
    </>
  );
};

export default App;
