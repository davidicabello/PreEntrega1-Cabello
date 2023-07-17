import iconoUmbralStore from "../assets/iconoUmbralStore.png";
import "../stylesheets/NavBar.css";
import { CartWidget } from "./CartWidget";
import {
  Heading,
  Button,
  Flex,
  Spacer,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";

const umbralName = {
  color: "white",
  fontSize: "22px",
  fontWeight: "bold",
  letterSpacing: "8px",
};
const linkStyles = {
  display: "flex",
  alignItems: "center",
  gap: "90px",
  color: "#1C325A",
};

export const NavBar = ({
  /*Paso las props para hacer el componente mas reutilizable asumo? */
  brand,
  navLinkOne,
  navLinkTwo,
  navLinkThree,
  altBrandLogo,
}) => {
  return (
    <Flex
      as="nav"
      p="10px"
      alignItems="center"
      gap="50px"
      bg="lightgrey"
      flexWrap="wrap"
    >
      <Box sx={umbralName}>
        <Text>{brand}</Text>
      </Box>
      <Heading>
        <img
          className="iconoPrincipalUmbral"
          src={iconoUmbralStore}
          alt={altBrandLogo}
        />
      </Heading>
      <Spacer />
      <Box sx={linkStyles}>
        {/* Encontre este componente y pense que serviria para hacer los <a> del nav */}
        <Link href="#">{navLinkOne}</Link>
        <Link href="#">{navLinkTwo}</Link>
        <Link href="#">{navLinkThree}</Link>
      </Box>
      <Box>
        <Button>Login</Button>
      </Box>
      <Box>
        <CartWidget alt="icono carrito" />
      </Box>
    </Flex>
  );
};
NavBar.defaultProps = {
  brand: "Icono De La Marca",
  navLinkOne: "Primer link",
  navLinkTwo: "Segundo Link",
  navLinkThree: "Tercer link",
  altBrandLogo: "Logo de la marca",
};
