import React from 'react'
import { Link } from 'react-router-dom';

let a=10, b=20;
const Info = () => {
  return (
    <div>
        <h1>Info</h1>
        <Link to='/'>Go to Homepage</Link>
    </div>
  )
}

export default Info;
export {a,b};