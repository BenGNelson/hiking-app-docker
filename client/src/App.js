import { useState } from "react";
import { ChakraProvider, Container } from '@chakra-ui/react'
import { v4 as uuidv4 } from "uuid";

import AddHike from './Components/hikes/AddHike';
import HikesList from "./Components/hikes/HikesList";
import Navbar from './ui/Navbar'

const App = () => {
  const [hikes, setHikes] = useState([
    {
      _id: uuidv4(),
      hikeName: "Creve Coeur Park",
      hikeLength: 3,
      hikeRating: 7,
    },
    {
      _id: uuidv4(),
      hikeName: "Rock Cut State Park Trail",
      hikeLength: 2,
      hikeRating: 8,
    },
    {
      _id: uuidv4(),
      hikeName: "Lewis and Clark Trail",
      hikeLength: 5,
      hikeRating: 9,
    },
  ]);

  const addHikeHandler = (hikeName, hikeLength, hikeRating) => {
    setHikes((prevState) => {
      return [
        ...prevState,
        {
          _id: uuidv4(),
          hikeName,
          hikeLength,
          hikeRating,
        },
      ];
    });
  };

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
};

export default App;
