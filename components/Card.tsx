import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Link } from "@mui/material";

export interface CardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

export default function ProductCard({ name, image, price }: CardProps) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <Link href={"/detail"} sx={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia component="img" height="100%" image={image} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" textAlign={"center"}>
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"center"}
            >
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
