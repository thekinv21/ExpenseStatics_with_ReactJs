import React from "react";
import { Input } from "@chakra-ui/react";

const Inputs = ({
  name,
  width,
  height,
  fontsize,
  value,
  onchange,
  placeholder,
  length,
}) => {
  return (
    <Input
      name={name}
      w={width}
      h={height}
      fontSize={fontsize}
      value={value}
      onChange={onchange}
      pl="8px"
      placeholder={placeholder}
      autoComplete="off"
      maxLength={length}
      _placeholder={{ color: "#fff", fontSize: "12px" }}
    />
  );
};
export default Inputs;
