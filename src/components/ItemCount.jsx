import { useState } from "react";
import {
  Button,
  NumberInput,
  NumberInputField,
  HStack,
} from "@chakra-ui/react";
export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count >= stock) {
      return;
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  const addToCart = () => {
    onAdd(count);
  };

  return (
    <>
      <HStack>
        <NumberInput value={count} readOnly display="flex" maxW="320px">
          <Button onClick={decrement}>-</Button>
          <NumberInputField />
          <Button onClick={increment}>+</Button>
        </NumberInput>
        <Button onClick={addToCart}>Agregar al carrito</Button>
      </HStack>
    </>
  );
};
