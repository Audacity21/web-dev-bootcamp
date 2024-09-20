import React from 'react'
import Navbar from './Navbar'
import { Box, Card } from '@mui/material'

const People = () => {
    const people = [
        {
            img: "",
            price: 10,
            name: "Alice",
            age: 21
        },
        {
            name: "Bob",
            age: 22
        },
        {
            name: "Clark",
            age: 20
        }
    ]
  return (
    <>
        <Navbar />
        <Box className="home__container">
        {
            people.map((person) => {
                return (
                    <Card>
                        <h1>{person.name}</h1>
                        <h1>{person.age}</h1>
                    </Card>
                )
            })
        }
        </Box>
    </>
  )
}

export default People