import Link from "next/link";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export interface BlogPreviewProps {
  id: number;
  title: string;
  image: string;
  content: string;
}

export function BlogPreview({ id, title, image, content }: BlogPreviewProps) {
  return (
    <Card>
      <CardActionArea LinkComponent={Link} href={`blog/${id}`}>
        <Box position="relative">
          <CardMedia
            component="img"
            width="100%"
            image={image}
            alt="green iguana"
            sx={{ borderRadius: "6px" }}
          />
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
          <Typography>{content}</Typography>
        </CardContent>
      </CardActionArea>
      <Button
        variant="dashed"
        sx={{ padding: "14px 20px", fontWeight: 700, margin: "30px 0" }}
      >
        continue reading
      </Button>
    </Card>
  );
}
