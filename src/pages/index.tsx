import { Box, Button, Container, Stack, Typography, Grid } from "@mui/material";

import {
  BannerMid,
  BannerTop,
  BlogCard,
  ColectionList,
  Link,
  ProductCard,
  Slider,
  Supscribe,
} from "@/components";
import { Collections } from "@/store/constants";
import { useBlogsQuery, useProductsQuery } from "@/generated/graphql";
import { getStaticPropsFunc } from "@/lib/next-static-props";
import Head from "next/head";

export default function Home() {
  const { data: products } = useProductsQuery({
    pagination: {
      page: 1,
      pageSize: 12,
    },
  });

  const { data: blogsData } = useBlogsQuery({
    pagination: {
      page: 1,
      pageSize: 3,
    },
  });

  return (
    <>
      <Head>
        <title>Gấu Bông Xuất Khẩu Home</title>
        <meta
          name="description"
          content="gaubongxuatkhau.com là đơn vị cung cấp gấu bông, thú bông số lượng lớn, nhận làm các mẫu gấu bông theo yêu cầu, order hàng toàn quốc. Hơn nữa, gaubongxuatkhau có thể xuất sỉ hàng toàn quốc nhanh chóng và tối ưu chi phí nhất"
        />
        <meta
          name="keywords"
          content="gấu bông, gấu bông giá sỉ, gấu bông giá rẽ, xưởng gấu bông, teddy, teddy bear, thú bông, đại lý gấu bông"
        />
        <meta name="robots" content="index, follow" />
        {/* <base href="http://localhost:3000" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerTop />
      <Container maxWidth="lg">
        <ColectionList colections={Collections} />
        <Box marginTop="115px">
          <Typography
            fontFamily="Hensa"
            fontSize="64px"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            {"You'll ❤ This"}
          </Typography>
          <Typography fontSize="1.25rem" textAlign="center" color="#575757">
            We’ve picked few pieces we’re pretty sure you’ll love
          </Typography>
          <Typography fontSize="1.25rem" textAlign="center" color="#575757">
            Check back often and enjoy.
          </Typography>
        </Box>
        <Box padding="80px 0">
          <Box sx={{ textAlign: "center" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3, lg: 4 }}
              marginTop="50px"
              marginBottom="100px"
            >
              {products?.products?.data.map((product) => (
                <Grid key={product.id} item xs={6} sm={4} md={3}>
                  <ProductCard
                    id={product.id ?? ""}
                    slug={product.attributes?.slug ?? ""}
                    name={product.attributes?.name ?? ""}
                    image={`https://api.gaubongthuonghieu.com${
                      product.attributes?.image?.data?.[0].attributes?.url ?? ""
                    }`}
                    price={product.attributes?.price ?? 0}
                    promotion={product.attributes?.promotion}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Stack direction="row" justifyContent="center">
            <Button
              LinkComponent={Link}
              href="/shop"
              variant="dashed"
              color="secondary"
              sx={{ padding: "14px 20px", fontWeight: 700 }}
            >
              Xem tất cả sản phẩm
            </Button>
          </Stack>
        </Box>
      </Container>
      <BannerMid />
      <Container maxWidth="lg">
        <Box padding="100px 0" style={{ textAlign: "center" }}>
          <Box marginTop="35px">
            <Typography
              fontFamily="Hensa"
              fontSize="64px"
              sx={{ textAlign: "center", marginBottom: "20px" }}
            >
              From The Blog
            </Typography>
            <Typography fontSize="1.25rem" textAlign="center" color="#575757">
              We’ve picked few pieces we’re pretty sure you’ll love
            </Typography>
            <Typography fontSize="1.25rem" textAlign="center" color="#575757">
              Check back often and enjoy.
            </Typography>
          </Box>
          <Grid item marginTop="50px" marginBottom="50px">
            <Slider slidesToShow={3}>
              {blogsData?.blogs?.data?.map((blog) => (
                <BlogCard
                  key={blog.id}
                  slug={blog.attributes?.slug ?? ""}
                  title={blog.attributes?.title ?? ""}
                  image={`https://api.gaubongthuonghieu.com${blog.attributes?.image?.data?.attributes?.url}`}
                  createAt={blog.attributes?.createdAt}
                />
              ))}
            </Slider>
          </Grid>
        </Box>
      </Container>
      <Supscribe />
    </>
  );
}

export const getStaticProps = getStaticPropsFunc(async ({ queryClient }) => {
  const productVariables = {
    pagination: {
      page: 1,
      pageSize: 12,
    },
  };

  const blogVariables = {
    pagination: {
      page: 1,
      pageSize: 3,
    },
  };
  await queryClient.prefetchQuery(
    useProductsQuery.getKey(productVariables),
    useProductsQuery.fetcher(productVariables)
  );
  await queryClient.prefetchQuery(
    useBlogsQuery.getKey(blogVariables),
    useBlogsQuery.fetcher(blogVariables)
  );

  return {};
});
