import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "./Link";

export interface BlogProps {
  id: number;
  title: string;
  image: string;
}

export function BlogCard({ id, title, image }: BlogProps) {
  return (
    <Card sx={{ borderRadius: "6px" }}>
      <CardActionArea LinkComponent={Link} href={`/blog/${id}`}>
        <Box position="relative">
          <CardMedia component="img" width="100%" image={image} alt={image} />
          <Box
            position="absolute"
            sx={{
              inset: "10px",
              border: "2px dashed #fff",
              borderRadius: "6px",
            }}
          ></Box>
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="left"
            fontWeight={700}
            fontSize="27px"
            color="#545454"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
