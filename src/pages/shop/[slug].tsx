import { useState } from "react";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  IconButton,
  InputBase,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

import { useProductsQuery } from "@/generated/graphql";
import { Link } from "@/components";
import { useCart } from "@/hooks";
import { getStaticPropsFunc } from "@/lib/next-static-props";
import { getStaticPathsFunc } from "@/lib/next-static-paths";

type Inputs = {
  value: number;
};

const schema = yup.object({
  value: yup.number().min(1).max(99).required("Required"),
});

export default function ShopDetailPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const { control, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: { value: 1 },
    resolver: yupResolver(schema),
  });

  const { onAdd } = useCart();

  const router = useRouter();

  const slug = router.query.slug;

  const { data } = useProductsQuery({
    filters: {
      slug: {
        eq: String(slug),
      },
    },
  });

  const onSubmit: SubmitHandler<Inputs> = ({ value }) => {
    onAdd(data?.products?.data?.[0].id ?? "", value);
    reset();
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={{ md: 2, lg: 4 }} marginTop="150px">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              width="100%"
              src={`https://api.gaubongthuonghieu.com${data?.products?.data?.[0]?.attributes?.image.data?.[0].attributes?.url}`}
              alt={data?.products?.data?.[0]?.attributes?.name}
              onClick={handleOpen}
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                component="img"
                src={`https://api.gaubongthuonghieu.com${data?.products?.data?.[0]?.attributes?.image.data?.[0].attributes?.url}`}
                alt={data?.products?.data?.[0]?.attributes?.name}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "60vw",
                  boxShadow: 24,
                }}
              />
            </Modal>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              fontSize="40px"
              color="#333"
              fontWeight={700}
              marginBottom="20px"
            >
              {data?.products?.data?.[0]?.attributes?.name}
            </Typography>
            <Typography fontSize="14px" marginBottom="20px">
              {data?.products?.data?.[0]?.attributes?.description}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              marginY="15px"
              sx={{ maxWidth: "100%" }}
            >
              {data?.products?.data?.[0]?.attributes?.promotion && (
                <Typography
                  fontSize="18px"
                  color="#999"
                  sx={{ textDecoration: "line-through" }}
                >
                  {data?.products?.data?.[0]?.attributes?.price.toLocaleString(
                    "de-DE"
                  )}
                </Typography>
              )}
              <Typography fontSize="30px" color="#333" fontWeight={500}>
                {data?.products?.data?.[0]?.attributes?.promotion
                  ? (
                      data?.products?.data?.[0]?.attributes?.price -
                      (data?.products?.data?.[0]?.attributes?.price *
                        data?.products?.data?.[0]?.attributes?.promotion) /
                        100
                    ).toLocaleString("de-DE")
                  : data?.products?.data?.[0]?.attributes?.price.toLocaleString(
                      "de-DE"
                    )}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              spacing={1}
              alignItems="center"
              marginBottom="40px"
            >
              <Controller
                control={control}
                name="value"
                render={({ field: { onChange, ...rest } }) => (
                  <InputBase
                    inputMode="numeric"
                    type="number"
                    sx={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "50%",
                      fontSize: "15px",
                      fontWeight: "bold",
                      lineHeight: "46px",
                      color: "#666",
                      border: "none",
                      background: "#f5f5f5",
                      WebkitAppearance: "none",
                    }}
                    inputProps={{
                      style: {
                        textAlign: "center",
                      },
                    }}
                    {...rest}
                    onChange={(e) =>
                      onChange(
                        Number(e.target.value) < 100 ? e.target.value : "99"
                      )
                    }
                  />
                )}
              />
              <Button
                type="submit"
                variant="dashed"
                sx={{
                  padding: "12px 40px",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                }}
              >
                Add to cart
              </Button>
              <IconButton>
                <FavoriteBorder color="info" />
              </IconButton>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#333333",
                }}
              >
                {"Danh mục:"}
              </Typography>

              {data?.products?.data?.[0]?.attributes?.product_categories?.data.map(
                (category) => (
                  <Chip
                    component={Link}
                    href={`/shop?category=${category.attributes?.slug}`}
                    key={category.id}
                    label={category.attributes?.name}
                    size="small"
                    clickable
                    sx={{
                      height: "auto",
                      "& .MuiChip-label": {
                        display: "block",
                        whiteSpace: "normal",
                      },
                    }}
                  />
                )
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export const getStaticPaths = getStaticPathsFunc(async ({ queryClient }) => {
  const data = await queryClient.fetchQuery(
    useProductsQuery.getKey(),
    useProductsQuery.fetcher()
  );

  return {
    paths: (data.products?.data ?? []).map((propduct) => ({
      params: {
        slug: propduct.attributes?.slug ?? "",
      },
    })),
    fallback: true,
  };
});

export const getStaticProps = getStaticPropsFunc(
  async ({ queryClient, params }) => {
    const shopVariables = {
      filters: {
        slug: {
          eq: String(params?.slug),
        },
      },
    };

    await queryClient.prefetchQuery(
      useProductsQuery.getKey(shopVariables),
      useProductsQuery.fetcher(shopVariables)
    );

    return {};
  }
);
