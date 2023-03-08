import React from "react";
import Buttons from "../UI/Buttons";
import { Box, useDisclosure } from "@chakra-ui/react";
import ExpenseModal from "./../Modals/ExpenseModal";

const ExpenseHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      <Box
        w="660px"
        h="60px"
        borderRadius="5px"
        bg="#9b8ee8"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={30}
      >
        <Buttons
          title=" Add new Expense"
          width={220}
          height={35}
          bg="#360d54"
          weight={300}
          fontsize={13}
          hover={{ bg: "#360d53" }}
          onClick={() => onOpen()}
        />
      </Box>

      <ExpenseModal openCreate={isOpen} closeCreate={onClose} />
    </React.Fragment>
  );
};

export default ExpenseHeader;
