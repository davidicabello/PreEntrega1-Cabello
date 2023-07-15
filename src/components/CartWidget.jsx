import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import iconoCarrito from "../assets/icon-cart.svg";
import "../stylesheets/CartWidget.css";
const CartWidget = (alt) => {
  return (
    <>
      <Box>
        <Flex p="10px" alignItems="center" gap="5px">
          <img
            className="iconoCarrito"
            src={iconoCarrito}
            alt={alt}
          />
          <p>10</p>
        </Flex>
      </Box>
    </>
  );
};

export default CartWidget;
