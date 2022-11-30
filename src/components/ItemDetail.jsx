import React from "react";
import "../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia component="img" image={data.image} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {data.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Precio: ${data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.category}
        </Typography>
        {goToCart ? (
          <Link to="/cart">Terminar compra</Link>
        ) : (
          <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
        )}
      </CardContent>
    </Card>
  );
};

export default ItemDetail;
