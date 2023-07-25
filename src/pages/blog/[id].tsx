import { useRouter } from "next/router";

import { Box, Container, Typography } from "@mui/material";

import { PageTitle } from "@/components";
import { blogsReview } from "@/store/constants";

export default function BlogDetailPage() {
  const route = useRouter();
  const id = route.query.id;
  const blog = blogsReview.find((blog) => blog.id === Number(id));
  return (
    <>
      <PageTitle title={String(blog?.title)} />
      <Container maxWidth="lg">
        <Box padding="80px 0">
          <Box component="img" src={`/${blog?.image}`} width="100%" />
          <Typography>{blog?.content}</Typography>
        </Box>
      </Container>
    </>
  );
}
