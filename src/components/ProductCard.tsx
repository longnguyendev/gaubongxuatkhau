import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import Link from "./Link";

export interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

export default function ProductCard({ name, image, price }: ProductCardProps) {
  return (
    <Card
      sx={{
        borderRadius: "6px",
        maxWidth: "100%",
        position: "relative",
        ":hover": {
          ".MuiBox-root": {
            opacity: 1,
            bottom: 10,
          },
        },
      }}
    >
      <CardActionArea LinkComponent={Link} href="/detail">
        <CardMedia
          component="img"
          height="100%"
          image={image}
          alt={name}
          sx={{ position: "relative" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" textAlign="center">
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"center"}
          >
            {price.toLocaleString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box
        sx={{
          opacity: 0,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          transition: "0.2s",
        }}
      >
        <Button variant="dashed">Add to cart</Button>
      </Box>
    </Card>
  );
}
