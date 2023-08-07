import React from "react";
import { Item } from "./Item";
export const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((pr) => {
        return (
          <Item
            key={pr.id}
            nombre={pr.nombre}
            descripcion={pr.descripcion}
            stock={pr.stock}
            price={pr.price}
            img={pr.img}
          />
        );
      })}
    </>
  );
};
