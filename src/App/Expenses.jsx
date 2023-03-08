import { Box } from "@chakra-ui/react";
import React from "react";
import ExpenseHeader from "../Components/Layouts/ExpenseHeader";
import ExpenseCharts from "./../Components/Expenses/ExpenseCharts";
import ExpenseList from "./../Components/Expenses/ExpenseList";
import ExpenseContainer from "./../Components/Layouts/ExpenseContainer";

const Expenses = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt="30px"
    >
      <ExpenseHeader />

      <ExpenseContainer>
        <ExpenseCharts />
        <ExpenseList />
      </ExpenseContainer>
    </Box>
  );
};

export default Expenses;
