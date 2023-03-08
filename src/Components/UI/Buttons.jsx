import { Button } from "@chakra-ui/react";

const Buttons = ({
  title,
  bg,
  color,
  width,
  height,
  weight,
  fontsize,
  disable,
  onClick,
  hover
}) => {
  return (
    <Button
      bg={bg}
      color={color}
      w={width}
      h={height}
      border="none"
      borderRadius="5px"
      fontSize={fontsize}
      fontWeight={weight}
      cursor="pointer"
      disabled={disable}
      onClick={onClick}
      _hover={{bg : hover}}
    >
      {title}
    </Button>
  );
};

export default Buttons;
