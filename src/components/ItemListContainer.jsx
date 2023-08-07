import { Container } from "@chakra-ui/react";
import "../stylesheets/ItemListContainer.css";
import { ItemList } from "./ItemList";
import webDesing from "../assets/web.png";
export const ItemListContainer = () => {
  const productos = [
    {
      id: 1,
      nombre: "Producto A",
      descripcion: "Descripcion de producto A",
      stock: 5,
      price: 150,
      img: webDesing,
    },
    {
      id: 2,
      nombre: "Producto B",
      descripcion: "Descripcion de producto B",
      stock: 10,
      price: 250,
      img: webDesing,
    },
    {
      id: 3,
      nombre: "Producto C",
      descripcion: "Descripcion de producto C",
      stock: 15,
      price: 350,
      img: webDesing,
    },
  ];

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    } else {
      reject(new Error("No hay datos"));
    }
  });

  getProductos
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  const list = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    color: "white",
    fontSize: "1em",
  };
  return (
    <Container className="main" sx={list}>
      <ItemList productos={productos} />
    </Container>
  );
};
