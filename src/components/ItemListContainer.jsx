import React from "react";

const ItemListContainer = ({ greeting, head }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <p>{head}</p>
    </div>
  );
};

export default ItemListContainer;
