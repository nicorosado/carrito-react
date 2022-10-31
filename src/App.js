import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
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
