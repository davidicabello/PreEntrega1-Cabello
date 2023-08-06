import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemCount } from "./components/ItemCount";
export const App = () => {
  //TAREA EN CLASE
  // const products = [
  //   {
  //     id: 1,
  //     nombre: "Producto A",
  //     descripcion: "Descripcion de producto A",
  //     stock: 5,
  //   },
  //   {
  //     id: 2,
  //     nombre: "Producto B",
  //     descripcion: "Descripcion de producto B",
  //     stock: 10,
  //   },
  //   {
  //     id: 3,
  //     nombre: "Producto C",
  //     descripcion: "Descripcion de producto C",
  //     stock: 15,
  //   },
  // ];

  // const getDatos = () => {
  //   return new Promise((resolve, reject) => {
  //     if (datos.lenght === 0) {
  //       reject(new Error("No hay datos"));
  //     }
  //     setTimeout(() => {
  //       resolve(datos);
  //     }, 3000);
  //   });
  // };

  // async function fetchingData() {
  //   try {
  //     const datosFetched = await getDatos();
  //     console.log(datosFetched);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  return (
    <div>
      <NavBar
        brand="UMBRAL® STORE"
        navLinkOne="console.log(web)"
        navLinkTwo="var umbral = 'servicios'"
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
      <ItemCount stock={10} initial={1} onAdd={addToCart} />
    </div>
  );
};
