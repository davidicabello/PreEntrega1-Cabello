import { Container } from "@chakra-ui/react";

const list = {
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",

  background: "black",
  maxWidth: "100%",
  color: "white",
  fontSize: "6em",
};

export const ItemListContainer = ({ greeting }) => {
  return (
    <Container sx={list}>
      <h1>{greeting}</h1>
    </Container>
  );
};
