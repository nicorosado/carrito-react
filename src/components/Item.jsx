import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function Item({ info }) {
  return (
    <Card ml={8} sx={{ bgcolor: "#efe4c2", maxWidth: 345 }} className="card">
      <CardActionArea>
        <CardMedia component="img" image={info.image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Precio: ${info.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/item/" + info.id} className="links">
          Ir al item
        </Link>
      </CardActions>
    </Card>
  );
}
