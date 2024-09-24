import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './firebaseConfig';

const Form = () => {
   const [name, setName] = useState("");
   const [price, setPrice] = useState(0);
   const addData = async () => {
    const docRef = await addDoc(collection(db, "foods"), {
        name: name,
        price: price
      });
      setName("");
      setPrice(0);
      console.log(name);
      console.log("Document written with ID: ", docRef.id);
      alert("Inserted to database");
   }
  return (
    <div>
        <input placeholder='name' type='text' onChange={(e) => setName(e.target.value)} />
        <input placeholder='price' value={price} type='number' onChange={(e) => setPrice(e.target.value)} />
        <button onClick={addData}>Add Data</button>
    </div>
  )
}

export default Form;
