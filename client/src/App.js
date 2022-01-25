import { React, useState, useEffect } from "react";
import { ChakraProvider, Container, Box } from '@chakra-ui/react'
import axios from 'axios';

import AddHike from './Components/hikes/AddHike';
import HikesList from "./Components/hikes/HikesList";
import Navbar from './ui/Navbar'

const App = () => {
  const [hikes, setHikes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const apiBaseRoute = "/api/v1"

  const addHikeHandler = (hikeName, hikeLength, hikeRating) => {
    axios.post(`http://localhost:5000/api/v1/hikes`, {
        hikeName: hikeName,
        hikeLength: hikeLength,
        hikeRating: hikeRating
      })
      .then(res => {
        setHikes([res.data.data, ...hikes])
        setIsLoaded(true);
        console.log(hikes);
      })
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/hikes`)
    .then(res => {
      const hikes = res.data;
      setIsLoaded(true);
      setHikes(hikes.data);
    })
  }, [])

  if (error) {
    return <Box>Error: {error.message}</Box>;
  } else if (!isLoaded) {
    return <Box>Loading...</Box>;
  } else {
    return (
      <ChakraProvider>
      <Container maxW='container.xl' py={4}>
        <Navbar />
      </Container>
      <Container maxW='container.md' py={5}>
        <AddHike onAddHike={addHikeHandler} />
        <HikesList hikes={hikes} />
      </Container>
    </ChakraProvider>
    );
  }
}

export default App;