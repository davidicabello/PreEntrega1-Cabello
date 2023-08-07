import { Container } from "@chakra-ui/react";
export const Testimonials = ({ greeting, colorBack }) => {
  const list = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    color: "white",
    fontSize: "3em",
  };
  return (
    <Container className="main" sx={list} background={colorBack}>
      <h1>{greeting}</h1>
    </Container>
  );
};
