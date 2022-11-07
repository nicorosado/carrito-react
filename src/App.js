import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* componentes que estan en todas las rutas */}
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* let pago = new Promise((res, rej) => {
  setTimeout(() => {
    res({ id: 100, name: "guille" });
    //rej("TODO MAL");
  }, 1000);
});

pago
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    console.log("aca si que termino todo!");
  }); */
