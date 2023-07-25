import { Container, Grid } from "@mui/material";

import { CategoryCard, Label, ProductCard, PageTitle } from "@/components";
import { products, shopCategories } from "@/store/constants";

export default function ShopPage() {
  return (
    <>
      <PageTitle
        title="BabyStreet Shop"
        description="We’ve picked few topics we’re pretty sure you’ll ❤ to read about. Check back often and enjoy."
      />
      <Container maxWidth="lg" sx={{ padding: "60px 0" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Label>Product categories</Label>
          </Grid>
          <Grid item xs={12} md={9} padding="30px 0">
            <Grid container spacing={4}>
              {shopCategories.map((category) => (
                <Grid item key={category.id} xs={12} sm={6} md={4} xl={3}>
                  <CategoryCard {...category} />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={4} marginTop="50px" marginBottom="100px">
              {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={3}>
                  <ProductCard {...product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
