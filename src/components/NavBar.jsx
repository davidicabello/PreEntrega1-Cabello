import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <Flex>
      <Menu>
        <Box p="4" bg="red.400">
          <h2>LOGO</h2>
        </Box>
        <Spacer />
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <Box p="4" bg="red.400">
        <CartWidget />
      </Box>
    </Flex>
  );
};

export default NavBar;
