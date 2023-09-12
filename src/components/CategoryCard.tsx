import { Box, Card, CardActionArea, Stack, Typography } from "@mui/material";

import { Link } from "./Link";
import Image from "next/image";

export interface CategoryCardProps {
  slug: string;
  name: string;
  image: string;
}

export function CategoryCard({ slug, name, image }: CategoryCardProps) {
  return (
    <>
      <Card>
        <CardActionArea
          LinkComponent={Link}
          href={`/shop?category=${slug}`}
          sx={{
            position: "relative",
            ":after": {
              content: '""',
              position: "absolute",
              inset: "10px",
              border: "2px dashed #fff",
              borderRadius: "6px",
            },
            ":hover": {
              ".MuiBox-root": {
                transform: "scale(1.1)",
              },
            },
          }}
        >
          <Box
            width="100%"
            sx={{
              aspectRatio: 2 / 3,
              transition: "0.2s ease-in",
            }}
          >
            <Image
              alt={name}
              src={image}
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
          <Stack
            direction="column"
            position="absolute"
            sx={{ bottom: "20%", left: "10px", right: "10px" }}
          >
            <Typography
              fontSize="45px"
              lineHeight="45px"
              fontFamily="SVN-Arsilon"
              textAlign="center"
              color="white"
              fontWeight={500}
              sx={{ textShadow: "2px 2px 6px rgba(0,0,0,1)" }}
            >
              {name}
            </Typography>
          </Stack>
        </CardActionArea>
      </Card>
    </>
  );
}
