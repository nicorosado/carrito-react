import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* componentes que estan en todas las rutas */}
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/checkout" element={<Cart />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/category/:idcategory"
              element={<ItemListContainer />}
            />
            <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
