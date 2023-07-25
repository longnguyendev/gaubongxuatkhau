import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Stack } from "@mui/material";

import { Link } from "./Link";

export interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  promotion?: number;
}

export function ProductCard({
  name,
  image,
  price,
  promotion,
  id,
}: ProductCardProps) {
  return (
    <Card
      sx={{
        textAlign: "center",
        borderRadius: "6px",
        maxWidth: "100%",
        position: "relative",
        ":hover": {
          ".MuiBox-root": {
            opacity: 1,
            bottom: "50%",
            transform: "translateY(50%)",
          },
        },
        ...(promotion && {
          ":after": {
            position: "absolute",
            content: `"-${promotion}%"`,
            width: "40px",
            height: "40px",
            lineHeight: "40px",
            background: "#ff8087",
            borderRadius: "50%",
            color: "#fff",
            fontSize: "12px",
            textAlign: "center",
            top: "20px",
            left: "20px",
            fontWeight: "bold",
          },
        }),
      }}
    >
      <CardActionArea LinkComponent={Link} href={`/shop/${id}`}>
        <CardMedia
          component="img"
          height="100%"
          image={image}
          alt={name}
          sx={{ position: "relative" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            textAlign="center"
            fontWeight="bold"
          >
            {name}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            {promotion && (
              <Typography
                color="#999"
                fontWeight="bold"
                sx={{ textDecoration: "line-through" }}
              >
                {price.toLocaleString()}
              </Typography>
            )}
            <Typography fontSize="17px" color="#81d1e5" fontWeight={700}>
              {promotion
                ? (price - (price * promotion) / 100).toLocaleString()
                : price.toLocaleString()}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
      <Box
        sx={{
          opacity: 0,
          position: "absolute",
          bottom: "30%",
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
