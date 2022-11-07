import Item from "./Item";
import * as React from "react";
import Box from "@mui/material/Box";

const ItemList = ({ data = [] }) => {
  return (
    <Box className="cardContainer">
      {data.map((producto) => (
        <Item key={producto.id} info={producto} />
      ))}
    </Box>
  );
};
export default ItemList;
