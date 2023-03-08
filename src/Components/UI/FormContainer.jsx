import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";

const FormContainer = ({ label, children }) => {
  return (
    <FormControl mt={5}>
      <FormLabel fontSize={12}>{label}</FormLabel>
      {children}
    </FormControl>
  );
};

export default FormContainer;
