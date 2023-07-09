import { Box, Button, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import ProductCard from "./Card";

export interface IAppProps {}

export default function Cards() {
  return (
    <Box marginBottom={"200px"}>
      <Container maxWidth="xl" style={{ textAlign: "center" }}>
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
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard
              name="ahihi"
              image="baby-prod21-1-390x439.jpg"
              price={123}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard
              name="ahihi"
              image="baby-prod22-1-390x439.jpg"
              price={123}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard
              name="ahihi"
              image="baby-prod17-2-390x439.jpg"
              price={123}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard
              name="ahihi"
              image="baby-prod23-1-390x439.jpg"
              price={123}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard
              name="ahihi"
              image="baby-prod20-1-390x439.jpg"
              price={123}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard
              name="ahihi"
              image="baby-prod19-1-390x439.jpg"
              price={123}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard
              name="ahihi"
              image="baby-prod8-4-390x439.jpg"
              price={123}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard
              name="ahihi"
              image="baby-prod24-1-390x439.jpg"
              price={123}
            />
          </Grid>
        </Grid>
        <Button variant="dashed" color="secondary" sx={{ padding: "10px" }}>
          Shop all product
        </Button>
      </Container>
    </Box>
  );
}
