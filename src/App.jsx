import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer 
      greeting = "Bienvenido a mi tienda"
      head = "Como te va?"
      />
    </div>
  );
};

export default App;
