import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function MultiActionAreaCard({ info }) {
  return (
    <Card ml={8} sx={{ bgcolor: "#efe4c2", maxWidth: 345 }} className="card">
      <CardActionArea>
        <CardMedia component="img" image={info.image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/item/" + info.id} className="links">
          Ir al item
        </Link>
      </CardActions>
      <ItemCount initial={1} stock={5} />
    </Card>
  );
}
