import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { iditem } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", iditem);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [iditem]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
