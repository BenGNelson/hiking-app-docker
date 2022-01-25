import React from "react";
import { Flex, Spacer, Box, Heading, Button } from '@chakra-ui/react';


const Navbar = () => {
  return (
    <Flex>
        <Box p='2'>
            <Heading size='md'>Hiking App</Heading>
        </Box>
        <Spacer />
        <Box>
            <Button colorScheme='teal' mr='4'>
            Sign Up
            </Button>
            <Button colorScheme='teal'>Log in</Button>
        </Box>
    </Flex>
  );
};

export default Navbar;
