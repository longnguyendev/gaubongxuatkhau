import { Box, Grid } from "@mui/material";

import { ProductCard, ProductCardProps } from "./ProductCard";

export interface CardsProps {
  products: ProductCardProps[];
}

export function ProductList({ products }: CardsProps) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container spacing={4} marginTop="50px" marginBottom="100px">
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
