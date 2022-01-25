import React from 'react';
import { Text, HStack, Box, Heading } from '@chakra-ui/react';

const Hike = (props) => {
  const hike = props.hike;

  return (
    <HStack spacing={8} mt={8}>
      <Feature
        hikeName={hike.hikeName}
        hikeLength={hike.hikeLength}
        hikeRating={hike.hikeRating}
      />
    </HStack>
  );
};

function Feature({ hikeName, hikeLength, hikeRating, ...rest }) {
  return (
    <Box
      p={5}
      shadow='md'
      borderWidth='1px'
      flex='1'
      borderRadius='md'
      {...rest}
    >
      <Heading fontSize='xl'>{hikeName}</Heading>
      <Text mt={4}>Length (miles): {hikeLength}</Text>
      <Text mt={4}>Rating: {hikeRating}</Text>
    </Box>
  )
}

export default Hike;
