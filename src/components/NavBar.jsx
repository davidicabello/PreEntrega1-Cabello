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
  Code,
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
  gap: "10px",
  color: "#1C325A",
  fontWeight: "bold",
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
      bg="gray.300"
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
        <Link href="#">
          <Code children={navLinkOne} />
        </Link>
        <Link href="#">
          <Code colorScheme="red" children={navLinkTwo} />
        </Link>
        <Link href="#">
          <Code colorScheme="yellow" children={navLinkThree} />
        </Link>
      </Box>
      <Box>
        <Button h="0px" sx={linkStyles}>
          <Code children="login" />
        </Button>
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
