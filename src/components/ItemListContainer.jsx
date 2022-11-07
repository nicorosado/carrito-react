/* const greeting = (props) => {
  return <div className="saludo">{props.saludo}</div>;
};
export default greeting;
 */
import React, { useState, useEffect } from "react";
import "../App.css";
import ItemList from "./ItemList";
import cepillo from "../img/cepillo.jpg";
import pretal from "../img/pretal.jpg";
import alimento from "../img/alimento.jpg";
import { useParams } from "react-router-dom";

const productos = [
  {
    id: 1,
    image: cepillo,
    title: "Cepillo",
    category: "salud",
  },
  {
    id: 2,
    image: pretal,
    title: "Pretal",
    category: "salud",
  },
  {
    id: 3,
    image: alimento,
    title: "Alimento",
    category: "alimento",
  },
];

export const ItemListContainer = ({ texto }) => {
  const { idcategory } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    getData.then((res) => {
      if (idcategory) {
        setData(res.filter((item) => item.category === idcategory));
      } else {
        setData(res);
      }
      setIsLoading(false);
    });
  }, [idcategory]);

  return isLoading ? <div>Loading...</div> : <ItemList data={data} />;
};

export default ItemListContainer;
