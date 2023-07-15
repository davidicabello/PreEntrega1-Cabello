import { Container } from "@chakra-ui/react";
import React from "react";

const ItemListContainer = ({ greeting, head }) => {
  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <h1>{greeting}</h1>
      <p>{head}</p>
    </Container>
  );
};

export default ItemListContainer;
