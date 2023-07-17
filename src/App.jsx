import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
export const App = () => {
  return (
    <div>
      <NavBar
        brand="UMBRAL® STORE"
        navLinkOne="Web Development"
        navLinkTwo="Servicios"
        navLinkThree="Consultas"
        altBrandLogo="icono umbral"
      />
      <ItemListContainer greeting="Digital-First Design Agency Store./" />
    </div>
  );
};
