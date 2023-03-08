import { Box } from "@chakra-ui/react";
import React from "react";

const ExpenseContainer = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w={660}
      maxW="100%"
      h="auto"
      minH={80}
      bg="#1d1d1d"
      borderRadius={5}
      p='30px 10px 30px 10px'
    >
      {children}
    </Box>
  );
};

export default ExpenseContainer;
