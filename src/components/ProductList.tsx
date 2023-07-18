import { Box, Button, Grid, Typography } from "@mui/material";
import ProductCard, { ProductCardProps } from "./ProductCard";

export interface CardsProps {
  products: ProductCardProps[];
}

export default function ProductList({ products }: CardsProps) {
  return (
    <Box marginBottom={"100px"} style={{ textAlign: "center" }}>
      <Box marginTop={"200px"}>
        <Typography
          fontFamily={"Hensa"}
          fontSize={"64px"}
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          {"You'll ❤ This"}
        </Typography>
        <Typography variant="h6" textAlign={"center"} color={"#777777"}>
          We’ve picked few pieces we’re pretty sure you’ll love
        </Typography>
        <Typography variant="h6" textAlign={"center"} color={"#777777"}>
          Check back often and enjoy.
        </Typography>
      </Box>
      <Grid container spacing={4} marginTop={"50px"} marginBottom={"100px"}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
      <Button variant="dashed" color="secondary" sx={{ padding: "14px 20px" }}>
        Shop all product
      </Button>
    </Box>
  );
}
