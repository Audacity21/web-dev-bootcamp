import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfig';
import Form from './Form';

const App = () => {
  const [count, setCounter] = useState(0);
  const [foods, setFoods] = useState([]);
  // useEffect(() => {
  //   console.log("calling useEffect");
  // }, [])
  // useEffect(() => {
  //  console.log("data is being changed");
  // }, [count])
  const fetchFood = async () => {
    console.log("firebase is called");
    let foodArray = [];
    const querySnapshot = await getDocs(collection(db, "foods")); //replace collection name
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      foodArray.push(doc.data());
    });
    setFoods(foodArray);
  }
  useEffect(() => {
    fetchFood();
  }, [])
  const add = () => {
    setCounter(count+1);
  }
  return (
    <div>
      {/* <button onClick={add}>Add</button> */}
      {/* {count} */}
      <h1>Food App</h1>
      <Form />
      {foods.map((item) => {
        return (
          <>
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
          </>
        )
      })}
    </div>
  )
}

export default App