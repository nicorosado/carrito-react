import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import cepillo from "../img/cepillo.jpg";
import { useParams } from "react-router-dom";
import pretal from "../img/pretal.jpg";
import alimento from "../img/alimento.jpg";

const productos = [
  {
    id: "1",
    image: cepillo,
    title: "Cepillo",
    category: "salud",
  },
  {
    id: "2",
    image: pretal,
    title: "Pretal",
    category: "salud",
  },
  {
    id: "3",
    image: alimento,
    title: "Alimento",
    category: "alimento",
  },
];

export const ItemDetailContainer = () => {
  const { iditem } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((item) => item.id === iditem));
      }, 2000);
    });
    getData.then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, [iditem]);

  return isLoading ? <div>Loading...</div> : <ItemDetail data={data} />;
};

export default ItemDetailContainer;
