import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Testimonials } from "./components/Testimonials";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
export const App = () => {
  return (
    <>
      <BrowserRouter>
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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
