import Label from "@/src/components/Label";
import TitlePage from "@/src/components/TitlePage";
import BlogPreview, {
  BlogPreviewProps,
} from "@/src/components/blog/BlogPreview";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import * as React from "react";
import { blogs, categories, popularPosts } from "../../store/constants";

export default function Blog() {
  const route = useRouter();
  const handleClick = (id: string) => {
    route.push(`/blog/${id}`);
  };
  return (
    <>
      <TitlePage>VinaTeddy Blog</TitlePage>
      <Container maxWidth="lg">
        <Grid container spacing={8} padding={"60px 0"}>
          <Grid item xs={12} sm={12} md={8}>
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                // href={`blog/${blog.id}`}
                sx={{ textDecoration: "none" }}
                onClick={() => {
                  handleClick(String(blog.id));
                }}
              >
                <BlogPreview {...blog} />
              </Link>
            ))}
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Box marginBottom={"50px"}>
              <Label>Categories</Label>
              <List>
                {categories.map((category) => (
                  <ListItem
                    disablePadding
                    key={category.id}
                    sx={{ borderBottom: "1px dashed #e8e8e8" }}
                  >
                    <ListItemButton>
                      <ListItemText primary={category.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box marginBottom={"50px"}>
              <Label>Popular Post</Label>
              <List>
                {popularPosts.map((post) => (
                  <ListItem
                    key={post.title}
                    disablePadding
                    sx={{ borderBottom: "1px dashed #e8e8e8" }}
                  >
                    <ListItemButton>
                      <Box
                        position={"relative"}
                        width={"58px"}
                        height={"58px"}
                        flexShrink={0}
                        borderRadius={"50%"}
                        marginRight={"20px"}
                        sx={{
                          "::after": {
                            position: "absolute",
                            content: "''",
                            inset: "2px",
                            borderRadius: "50%",
                            border: "2px dashed #e1e1e1",
                          },
                        }}
                      >
                        <Box
                          position={"absolute"}
                          padding={"6px"}
                          component={"img"}
                          src={post.image}
                          width={"100%"}
                          height={"100%"}
                          borderRadius={"50%"}
                        ></Box>
                      </Box>

                      <ListItemText primary={post.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
