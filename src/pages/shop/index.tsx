import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  Slider,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDebounce, useIntersectionObserver } from "usehooks-ts";

import {
  CategoryCard,
  Label,
  ProductCard,
  PageTitle,
  Slider as SliderShow,
  Link,
} from "@/components";
import {
  useInfiniteProductsQuery,
  useProductCategoriesQuery,
  useProductsQuery,
} from "@/generated/graphql";
import { getStaticPropsFunc } from "@/lib/next-static-props";

const minDistance = 0;

const initValue = [0, 500_000];

const pageSize = 4;

export default function ShopPage() {
  const route = useRouter();

  const category = route.query.category ?? "";

  const min = route.query.min ? Number(route.query.min) : initValue[0];

  const max = route.query.max ? Number(route.query.max) : initValue[1];

  const [value, setValue] = useState<number[]>([min, max]);

  const { data: productData, fetchNextPage } = useInfiniteProductsQuery(
    "pagination",
    {
      pagination: { page: 1, pageSize },
      filters: {
        ...(category && {
          product_categories: {
            slug: {
              eq: String(category),
            },
          },
        }),
        and: [
          {
            price: {
              gte: min,
            },
          },
          {
            price: {
              lte: max,
            },
          },
        ],
      },
    },
    {
      getNextPageParam(lastPage) {
        const page = lastPage.products?.meta.pagination.page ?? 0;

        const pageCount = lastPage.products?.meta.pagination.pageCount ?? 0;

        if (page < pageCount) {
          return {
            pagination: {
              page: (lastPage.products?.meta.pagination.page ?? 0) + 1,
              pageSize,
            },
          };
        }
      },
    }
  );

  const { data: productOnSaleData } = useProductsQuery({
    filters: {
      promotion: {
        ne: null,
      },
    },
  });

  const { data: categoryData } = useProductCategoriesQuery();

  function valuetext(value: number) {
    return `${value}`;
  }

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  const debouncedValue = useDebounce<number[]>(value, 500);

  useEffect(() => {
    if (debouncedValue !== initValue) {
      route.push(
        {
          pathname: "/shop",
          query: {
            category,
            min: debouncedValue[0],
            max: debouncedValue[1],
          },
        },
        undefined,
        { shallow: true }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, debouncedValue]);

  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {});

  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
  }, [fetchNextPage, isVisible]);

  return (
    <>
      <PageTitle title="Gấu Bông Xuất Khẩu Shop">
        <Typography fontSize="18px" color="#49a3b9" fontWeight={700}>
          {`We’ve picked few topics we’re pretty sure you’ll ❤ to read about. Check back often and enjoy.`}
        </Typography>
      </PageTitle>
      <Container maxWidth="lg" sx={{ paddingY: "60px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Label>Danh mục sản phẩm</Label>
            <List sx={{ marginBottom: "50px" }}>
              {categoryData?.productCategories?.data.map((item) => (
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ borderBottom: "1px dashed #e8e8e8" }}
                >
                  <ListItemButton
                    LinkComponent={Link}
                    href={`/shop?category=${item.attributes?.slug}`}
                  >
                    <ListItemText
                      primary={item.attributes?.name}
                      {...(item.attributes?.slug === category && {
                        primaryTypographyProps: { color: "primary" },
                      })}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Label>Sản phẩm đang giảm giá</Label>
            <List sx={{ marginBottom: "50px" }}>
              {productOnSaleData?.products?.data.map((product) => (
                <ListItem
                  key={product.id}
                  disablePadding
                  sx={{ borderBottom: "1px dashed #e8e8e8" }}
                >
                  <ListItemButton
                    LinkComponent={Link}
                    href={`/shop/${product.attributes?.slug}`}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          marginRight: "10px",
                          position: "relative",
                          width: "58px",
                          height: "58px",
                          borderRadius: "unset",
                        }}
                        alt={product.attributes?.name}
                        src={`https://api.gaubongthuonghieu.com${
                          product.attributes?.image?.data?.[0].attributes
                            ?.formats.thumbnail.url ?? ""
                        }`}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        sx: { WebkitBoxOrient: "vertical", WebkitLineClamp: 2 },
                      }}
                      primary={product.attributes?.name}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            sx={{
                              display: "inline",
                              textDecoration: "line-through",
                              fontSize: "13px",
                            }}
                          >
                            {product.attributes?.price.toLocaleString("de-DE")}
                          </Typography>
                          {` ${
                            product.attributes?.promotion &&
                            (product.attributes?.promotion
                              ? (
                                  product.attributes?.price -
                                  (product.attributes?.price *
                                    product.attributes?.promotion) /
                                    100
                                ).toLocaleString("de-DE")
                              : product.attributes?.price.toLocaleString(
                                  "de-DE"
                                ))
                          }`}
                        </>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={9}>
            <SliderShow>
              {categoryData?.productCategories?.data.map((category) => (
                <CategoryCard
                  key={category.id}
                  slug={category.attributes?.slug ?? ""}
                  name={category.attributes?.name ?? ""}
                  image={`https://api.gaubongthuonghieu.com${
                    category.attributes?.image?.data?.attributes?.url ?? ""
                  }`}
                />
              ))}
            </SliderShow>
            <Grid container spacing={4} marginTop="50px" marginBottom="100px">
              <Grid item xs={12} sm={8} md={6} lg={4}>
                <Typography sx={{ fontSize: "13px", fontWeight: 700 }}>
                  <>
                    {"Lọc theo giá: "}
                    <Typography
                      component="span"
                      sx={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#81d1e5",
                      }}
                    >
                      {value[0].toLocaleString("de-DE")} -{" "}
                      {value[1].toLocaleString("de-DE")}
                    </Typography>
                  </>
                </Typography>
                <Slider
                  color="secondary"
                  min={0}
                  max={500000}
                  step={50000}
                  getAriaLabel={() => "Minimum distance"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  disableSwap
                />
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              {productData?.pages.map((page) =>
                page.products?.data.map((product) => (
                  <Grid key={product.id} item xs={6} md={3}>
                    <ProductCard
                      id={product.id ?? ""}
                      slug={product.attributes?.slug ?? ""}
                      name={product.attributes?.name ?? ""}
                      image={`https://api.gaubongthuonghieu.com${
                        product.attributes?.image?.data?.[0].attributes?.url ??
                        ""
                      }`}
                      price={product.attributes?.price ?? 0}
                      promotion={product.attributes?.promotion}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
        <Box ref={ref} />
      </Container>
    </>
  );
}

export const getStaticProps = getStaticPropsFunc(
  async ({ queryClient, params }) => {
    const productVariables = {
      pagination: { page: 1, pageSize },
      filters: {
        ...(params?.category && {
          product_categories: {
            slug: {
              eq: String(params.category),
            },
          },
        }),
        and: [
          {
            price: {
              gte: params?.min ? Number(params.min) : initValue[0],
            },
          },
          {
            price: {
              lte: params?.max ? Number(params.max) : initValue[1],
            },
          },
        ],
      },
    };

    const onSaleProductVariables = {
      filters: {
        promotion: {
          ne: null,
        },
      },
    };

    await queryClient.prefetchQuery(
      useProductsQuery.getKey(onSaleProductVariables),
      useProductsQuery.fetcher(onSaleProductVariables)
    );

    await queryClient.prefetchQuery(
      useProductsQuery.getKey(productVariables),
      useProductsQuery.fetcher(productVariables)
    );

    await queryClient.prefetchQuery(
      useProductCategoriesQuery.getKey(),
      useProductCategoriesQuery.fetcher()
    );

    return {};
  }
);
