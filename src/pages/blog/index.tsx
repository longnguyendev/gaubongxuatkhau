import Label from "@/src/components/Label";
import TitlePage from "@/src/components/TitlePage";
import BlogPreview from "@/src/components/blog/BlogPreview";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import * as React from "react";
import { blogs, categories, popularPosts } from "../../store/constants";

export default function Blog() {
  return (
    <>
      <TitlePage
        title="VinaTeddy Blog"
        description="We’ve picked few topics we’re pretty sure you’ll ❤ to read about. Check back often and enjoy."
      />
      <Container maxWidth="lg">
        <Grid container spacing={8} padding={"60px 0"}>
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
          <Grid item xs={12} sm={12} md={8}>
            {blogs.map((blog) => (
              <Grid key={blog.id} item xs={12} marginBottom={"50px"}>
                <BlogPreview {...blog} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
