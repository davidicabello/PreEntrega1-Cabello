import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
const App = () => {
  return (
    <div>
      <NavBar
        brand="UMBRAL ®"
        navLinkOne="Web Development"
        navLinkTwo="Servicios"
        navLinkThree="Consultas"
        altBrandLogo='icono umbral'
      />
      <ItemListContainer
      greeting="Bienvenido a mi tienda" 
      head="Como te va?" />
    </div>
  );
};

export default App;
