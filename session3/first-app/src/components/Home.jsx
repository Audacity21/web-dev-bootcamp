import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Ankit")
    // let num=1;
    // const add = () => {
    //     num=num+1;
    //     console.log(num);
    // }
    const add = () => {
        // let num = count;
        // setCount(num+1);
        // setCount((prev) => {
        //     return prev + 1;
        // })
        setCount(prev => prev+1);
    }
  return (
    <div className='home__title'>
        <h1>{count}</h1>
        <h1>{name}</h1>
        <button onClick={add}>Increment</button>
        <Link to="/info">Go to info page</Link>
    </div>
  )
}

// const styles = {
//     title: {
//         color: "red"
//     }
// }

export default Home;