import { ItemCount } from "./ItemCount";
import "../stylesheets/Item.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Text,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";

export const Item = ({ id, nombre, descripcion, stock, price, img }) => {
  const onAdd = (count) => {
    alert(`Agregaste ${count} items al carrito`);
  };
  return (
    <Flex>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>
            <Text>{descripcion}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            <Button>
              <Link to={`/item/${id}`}>Detalles</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
};
