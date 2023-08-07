import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Testimonials } from "./components/Testimonials";
export const App = () => {
  return (
    <>
      <NavBar
        brand="UMBRAL® STORE"
        navLinkOne="console.log(diseño web)"
        navLinkTwo="var umbral = 'diseño app'"
        navLinkThree="npm install desarrollo"
        altBrandLogo="icono umbral"
      />
      <Testimonials
        colorBack="gray.700"
        greeting="Digital-First Design Agency Store./"
      />
      <Testimonials
        colorBack="yellow.100"
        greeting="Design Agency Store./ Digital-First"
      />
      <Testimonials
        colorBack="red.100"
        greeting="First Design-Digital- Store./ Agency "
      />
      <ItemListContainer />
    </>
  );
};
