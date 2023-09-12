import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

import { Link } from "./Link";
import { WatchLater } from "@mui/icons-material";
import Image from "next/image";

export interface BlogCardProps {
  slug: string;
  title: string;
  image: string;
  createAt: string;
}

export function BlogCard({ slug, title, image, createAt }: BlogCardProps) {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          borderRadius: "6px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardActionArea
          LinkComponent={Link}
          href={`/blog/${slug}`}
          sx={{ display: "flex", flexDirection: "column", flex: 1 }}
        >
          <Box
            position="relative"
            width="100%"
            sx={{
              aspectRatio: 1,
            }}
          >
            <Image
              alt={title}
              src={image}
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            <Box
              position="absolute"
              sx={{
                inset: "10px",
                border: "2px dashed #fff",
                borderRadius: "6px",
              }}
            />
          </Box>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
              flex: 1,
            }}
          >
            <Typography
              textAlign="left"
              fontWeight={700}
              fontSize="27px"
              color="#545454"
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
              }}
            >
              {title}
            </Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <WatchLater fontSize="small" color="disabled" />
              <Typography fontSize="15px">
                {new Date(Date.parse(createAt)).toLocaleDateString("us-UK", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
