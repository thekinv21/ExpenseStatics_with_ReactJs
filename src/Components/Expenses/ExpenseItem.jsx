import React from "react";
import { Box, ButtonGroup, Text, Card, useDisclosure } from "@chakra-ui/react";
import Buttons from "../UI/Buttons";
import ExpenseDate from "./ExpenseDate";
import ExpenseModal from "./../Modals/ExpenseModal";
import { useSelector, useDispatch } from "react-redux";
import { selectEditExpense, deleteExpense } from "../../Redux/ExpenseSlicer";

const ExpenseItem = () => {
  //*-------------------Modal Setups---------------
  const { isOpen, onOpen, onClose } = useDisclosure();

  //*-------------------Using Redux Functions------------
  const dispatch = useDispatch();

  //*-------------------Take all expenses Array------------
  const expensesArray = useSelector((state) => state.Expense.expenses);
  const selectedExpense = useSelector((state) => state.Expense.selectedExpense);

  return (
    <React.Fragment>
      {expensesArray.map((expense, index) => (
        <Box
          w="630px"
          maxW="100%"
          h="90px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="20px"
          bg="#424242"
          borderRadius="5px"
          padding="0px 20px"
          overflow="hidden"
          key={index}
        >
          <ExpenseDate
            day={expense.day}
            month={expense.month}
            year={expense.year}
          />

          <Text bg="none" fontWeight={300} fontSize={14}>
            {expense.title}
          </Text>

          <ButtonGroup bg="none">
            <Card
              bg="#380d53"
              color="#fff"
              w={110}
              h={30}
              fontSize={15}
              borderRadius={5}
              fontWeight={400}
              display="flex"
              justifyContent="center"
              textAlign="center"
              alignItems="center"
            >
              ${expense.amount}
            </Card>
            <Buttons
              title="Update"
              bg="green"
              color="#000"
              width={90}
              height={30}
              weight={300}
              fontsize={13}
              onClick={() => {
                dispatch(selectEditExpense(expense.id));
                onOpen();
              }}
            />
            <Buttons
              title="Delete"
              bg="red"
              color="#ddd"
              width={90}
              height={30}
              weight={300}
              fontsize={13}
              onClick={() => {
                dispatch(deleteExpense(expense.id));
              }}
            />
          </ButtonGroup>
        </Box>
      ))}

      <ExpenseModal
        type="update"
        openUpdate={isOpen}
        closeUpdate={onClose}
        selectedExpense={selectedExpense}
      />
    </React.Fragment>
  );
};

export default ExpenseItem;
