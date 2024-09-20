import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Button, Card, CardContent, Typography } from "@mui/material";
import Navbar from "./Navbar";


const Home = () => {
  const [count, setCount] = useState(0);
  const [anime, setAnime] = useState([]);
  // JS Code
  const add = (num) => {
    setCount(num);
  }
  const sub = () => {
    setCount(count-1);
  }

  useEffect(() => {
    console.log(10);
  }, [])
  
  return (
    <>
        <Navbar />
    <Box className="home__container">
      <Button variant="contained" onClick={() => add(10)}>Set to 10</Button>
      <Card className="home__card">
        <CardContent>
            <Typography variant="h1">{count}</Typography>
        </CardContent>
      </Card>
      <Button variant="contained" onClick={sub}>Subtract</Button>
    </Box>
    </>
  )
}

export default Home;