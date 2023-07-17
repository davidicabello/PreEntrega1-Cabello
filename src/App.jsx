import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Testimonials } from "./components/Testimonials";
export const App = () => {
  return (
    <div>
      <NavBar
        brand="UMBRAL® STORE"
        navLinkOne="console.log(web)"
        navLinkTwo="var chakra = 'servicios!'
        "
        navLinkThree="npm install contacto"
        altBrandLogo="icono umbral"
      />
      <ItemListContainer
        colorBack="black"
        greeting="Digital-First Design Agency Store./"
      />
      <ItemListContainer
        colorBack="lightgrey"
        greeting="Design Agency Store./ Digital-First"
      />
      <ItemListContainer
        colorBack="black"
        greeting="First Design-Digital- Store./ Agency "
      />
      <Testimonials />
    </div>
  );
};
