import React from "react";
import "../App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ItemDetail = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={data.image} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h2>{data.title}</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>{data.category}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
  );
};

export default ItemDetail;
