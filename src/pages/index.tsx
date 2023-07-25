import { Box, Button, Container, Stack, Typography } from "@mui/material";

import {
  BannerMid,
  BannerTop,
  BlogList,
  ColectionList,
  ProductList,
} from "@/components";
import { products, Collections, blogs } from "@/store/constants";

export default function Home() {
  return (
    <>
      <BannerTop />
      <Container maxWidth="lg">
        <ColectionList colections={Collections} />
        <Box marginTop={"115px"}>
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
        <Box padding={"80px 0"}>
          <ProductList products={products} />
          <Stack direction="row" justifyContent="center">
            <Button
              variant="dashed"
              color="secondary"
              sx={{ padding: "14px 20px" }}
            >
              Shop all product
            </Button>
          </Stack>
        </Box>
      </Container>
      <BannerMid />
      <Container maxWidth="lg">
        <BlogList blogs={blogs} />
      </Container>
    </>
  );
}
