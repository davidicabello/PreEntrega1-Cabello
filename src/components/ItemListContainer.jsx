import { Container } from "@chakra-ui/react";
import "../stylesheets/ItemListContainer.css";
export const ItemListContainer = ({ greeting, colorBack }) => {
  const list = {
    display: "flex",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    color: "white",
    fontSize: "6em",
  };
  return (
    <Container className="main" sx={list} background={colorBack}>
      <h1>{greeting}</h1>
    </Container>
  );
};
