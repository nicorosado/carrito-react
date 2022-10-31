/* const greeting = (props) => {
  return <div className="saludo">{props.saludo}</div>;
};
export default greeting;
 */
import React, { useState, useEffect } from "react";
import "../App.css";
import ItemCount from "./ItemCount";
import { Title } from "@mui/icons-material";
import ItemList from "./ItemList";

const productos = [
  {
    id: 1,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_851237-MLA48704008171_122021-O.webp",
    title: "cepillo",
  },
  {
    id: 2,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_851237-MLA48704008171_122021-O.webp",
    title: "pretal",
  },
  {
    id: 3,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_851237-MLA48704008171_122021-O.webp",
    title: "alimento",
  },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    GetData.then((res) => setData(res));
  }, []);

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  };
  return (
    <>
      <Title greeting={texto} />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
