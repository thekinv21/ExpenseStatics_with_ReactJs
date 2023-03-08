import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const ExpenseDate = ({ day, year, month }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="5px"
      bg="#252525"
      w="90px"
      borderColor="#fff"
      p="5px"
    >
      <Text bg="none" fontSize={12}>
        {month}
      </Text>
      <Text bg="none" fontSize={10}>
        {year}
      </Text>
      <Heading fontSize={18} bg="none">
        {day}
      </Heading>
    </Box>
  );
};

export default ExpenseDate;
