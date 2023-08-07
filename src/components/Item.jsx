import { ItemCount } from "./ItemCount";
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

export const Item = ({ nombre, descripcion, stock, price, img }) => {
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
            <ItemCount
              stock={stock}
              initial={1}
              /*onAdd = {}*/
            />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
};
