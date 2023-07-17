import { Flex, Box } from "@chakra-ui/react";
import iconoCarrito from "../assets/icon-cart.svg";
import "../stylesheets/CartWidget.css";
export const CartWidget = ({ alt }) => {
  return (
    <>
      <Flex>
        <Flex p="10px" alignItems="center" gap="5px">
          <img className="iconoCarrito" src={iconoCarrito} alt={alt} />
          <p>10</p>
        </Flex>
      </Flex>
    </>
  );
};
