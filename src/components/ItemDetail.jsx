import { ItemCount } from "./ItemCount";
import { useParams, Link } from "react-router-dom";
import "../stylesheets/Item.css";
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
} from "@chakra-ui/react";

export const ItemDetail = ({ productos }) => {
  const onAdd = (count) => {
    alert(`Agregaste ${count} items al carrito`);
  };
  const { id } = useParams();

  const filteredProducts = productos.filter((producto) => producto.id == id);
  return (
    <Flex>
      {filteredProducts.map((p) => {
        return (
          <Box key={p.id}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={p.img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{p.nombre}</Heading>
                  <Text>{p.descripcion}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${p.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <ItemCount stock={p.stock} initial={1} onAdd={onAdd} />
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>
        );
      })}
    </Flex>
  );
};
