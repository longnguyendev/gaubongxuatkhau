import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Stack } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

import { Link } from "./Link";
import { useCart } from "@/hooks";

export interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  promotion?: number | null;
}

export function ProductCard({
  id,
  name,
  image,
  price,
  promotion,
  slug,
}: ProductCardProps) {
  const { onAdd } = useCart();
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "6px",
        maxWidth: "100%",
        minHeight: "100%",
        position: "relative",
        ":hover": {
          ".MuiButton-root": {
            opacity: 1,
            bottom: "50%",
            transform: "translate(-50%, 50%)",
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
            color: "white",
            fontSize: "12px",
            textAlign: "center",
            top: "20px",
            left: "20px",
            fontWeight: "bold",
          },
        }),
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <CardActionArea
        LinkComponent={Link}
        href={`/shop/${slug}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <Box
          position="relative"
          width="100%"
          sx={{
            aspectRatio: 1,
          }}
        >
          <Image
            alt={name}
            src={image}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            textAlign="center"
            fontWeight="bold"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
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
                fontSize="17px"
                color="#999"
                fontWeight="bold"
                sx={{ textDecoration: "line-through" }}
              >
                {price.toLocaleString("de-DE")}
              </Typography>
            )}
            <Typography fontSize="17px" color="#81d1e5" fontWeight={700}>
              {promotion
                ? (price - (price * promotion) / 100).toLocaleString("de-DE")
                : price.toLocaleString("de-DE")}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
      <Button
        variant="dashed"
        aria-label="add to cart"
        sx={{
          position: "absolute",
          bottom: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          opacity: 0,
          transition: "0.2s",
          whiteSpace: "nowrap",
        }}
        onClick={() => onAdd(id)}
      >
        Add to cart
      </Button>
    </Card>
  );
}
