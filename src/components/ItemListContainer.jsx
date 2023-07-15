import { Container } from "@chakra-ui/react";
import React from "react";
const ItemListContainer = ({ greeting }) => {
  const list = {
    display: "flex",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    background: "black",
    maxWidth: "100%",
    color: "white",
    fontSize: "160px",
  };
  return (
    <Container sx={list}>
      <h1>{greeting}</h1>
    </Container>
  );
};

export default ItemListContainer;
