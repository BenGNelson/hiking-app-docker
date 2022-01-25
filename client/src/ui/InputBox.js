import React from "react";
import { FormLabel, Input, Box } from '@chakra-ui/react';


const InputBox = (props) => {
  return (
    <Box>
      <FormLabel htmlFor={props.htmlFor}>{props.label}</FormLabel>
      <Input 
        placeholder={props.placeholder} 
        size='md' onChange={props.onChangeHandler} 
        value={props.enteredHikeName} 
    />
    </Box>
  );
};

export default InputBox;
