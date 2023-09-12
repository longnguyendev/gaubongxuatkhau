import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

import { Folder, WatchLater } from "@mui/icons-material";
import { Link } from "./Link";
import { motion } from "framer-motion";
import Image from "next/image";

export interface BlogPreviewProps {
  slug: string;
  title: string;
  image: string;
  content: string;
  createAt: string;
  categoryBlogName: string;
  categoryBlogSlug: string;
}

export function BlogPreview({
  slug,
  title,
  image,
  content,
  createAt,
  categoryBlogName,
  categoryBlogSlug,
}: BlogPreviewProps) {
  return (
    <Card
      variant="outlined"
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <Box position="relative">
        <Box height="100%" paddingTop="60%">
          <Image
            src={image}
            alt={title}
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
      <CardContent>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Folder fontSize="small" color="disabled" />
          <Link
            href={`/blog?category=${categoryBlogSlug}`}
            color="secondary"
            sx={{ textDecoration: "none", fontWeight: 500 }}
          >
            {categoryBlogName}
          </Link>
          <WatchLater fontSize="small" color="disabled" />
          <Typography fontSize="15px">
            {new Date(Date.parse(createAt)).toLocaleDateString("us-UK", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Stack>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="left"
          fontWeight={700}
          fontSize="27px"
          color="#545454"
          marginBottom="20px"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {title}
        </Typography>
        <Typography>{content}</Typography>
      </CardContent>
      <CardActions>
        <Button
          LinkComponent={Link}
          href={`/blog/${slug}`}
          variant="dashed"
          aria-label="read blog"
          sx={{
            padding: "14px 20px",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          continue reading
        </Button>
      </CardActions>
    </Card>
  );
}
