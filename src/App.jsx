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
        colorBack="gray.700"
        greeting="Digital-First Design Agency Store./"
      />
      <ItemListContainer
        colorBack="yellow.100"
        greeting="Design Agency Store./ Digital-First"
      />
      <ItemListContainer
        colorBack="red.100"
        greeting="First Design-Digital- Store./ Agency "
      />
      <Testimonials />
    </div>
  );
};
