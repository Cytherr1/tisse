import React from "react";
import { VStack } from "@chakra-ui/react";

const Section = ({ children, ...boxProps }) => {
    return (
    <VStack
      backgroundColor="#19A7CE"
    > 
      <VStack
      width="99vw" 
      minHeight="100vh" 
      justifyContent="center" 
      alignItems="center"  
      p={10}
      {...boxProps}
      > 
        {children} 
      </VStack> 
    </VStack> 
    );
  };
  
  export default Section;