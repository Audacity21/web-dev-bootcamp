import React, { useState } from 'react'
import Navbar from './Navbar'
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'

const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const handleName = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const submit = () => {
        alert(name);
        // localStorage API in JS
    }
  return (
    <>
        <Navbar />
        <Box className="home__container">
            <Card>
                <CardContent>
                    <Typography>Form Details</Typography>
                    <TextField onChange={(e) => handleName(e)} label="Name" />
                    <TextField type='number' label="age" />
                    <Button onClick={submit}>SUBMIT</Button>
                </CardContent>
            </Card>
        </Box>
    </>
  )
}

export default Form