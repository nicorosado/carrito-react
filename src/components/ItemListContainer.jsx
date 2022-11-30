import React, { useState, useEffect } from "react";
import "../App.css";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const { idcategory } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");

    if (idcategory) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", idcategory)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [idcategory]);

  return <ItemList data={data} />;
};

export default ItemListContainer;
