import Label from "@/components/Label";
import TitlePage from "@/components/TitlePage";
import BlogPreview, { BlogPreviewProps } from "@/components/blog/BlogPreview";
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

export interface PopularPostProps {
  id: number;
  title: string;
  image: string;
}

export interface categoriesProps {
  id: number;
  name: string;
}

const categories: categoriesProps[] = [
  { id: 1, name: "Fashion" },
  { id: 2, name: "Lifestyle" },
  { id: 3, name: "Party Time" },
];

const popularPosts: PopularPostProps[] = [
  {
    id: 1,
    title: "One Color, Five Looks for Girls",
    image: "bs-blog-1-100x100.jpg",
  },
  {
    id: 2,
    title: "6 Things I Learned On My Maternity Leave",
    image: "bs-blog-7-100x100.jpg",
  },
  {
    id: 3,
    title: "Why February Babies Are Extra Special",
    image: "bs-blog-8-100x100.jpg",
  },
  {
    id: 4,
    title: "When A Baby Shower Is More Than A Party",
    image: "bs-blog-9-100x100.jpg",
  },
  {
    id: 5,
    title: "Kids fashion trends summer 2019",
    image: "bs-blog-10-100x100.jpg",
  },
];

const blogs: BlogPreviewProps[] = [
  {
    id: 1,
    title: "Why February Babies Are Extra Special",
    image: "bs-blog-1.jpg",
    content:
      "Applying The Kids Design Guide Internet technology such as online retailers and social media platforms have given way for trends to be identified, marketed and sold immediately. Styles and trends are easily conveyed online to attract the trendsetters. Posts on Instagram or Facebook can easily increase awareness about new trends in fashion which can create",
  },
  {
    id: 2,
    title: "The Surprising Way Motherhood Changed Me",
    image: "bs-blog-2.jpg",
    content:
      "Applying The Kids Design Guide Internet technology such as online retailers and social media platforms have given way for trends to be identified, marketed and sold immediately. Styles and trends are easily conveyed online to attract the trendsetters. Posts on Instagram or Facebook can easily increase awareness about new trends in fashion which can create",
  },
  {
    id: 3,
    title: "How Aromatherapy Can Impact NICU Babies",
    image: "bs-blog-3.jpg",
    content:
      "Applying The Kids Design Guide Internet technology such as online retailers and social media platforms have given way for trends to be identified, marketed and sold immediately. Styles and trends are easily conveyed online to attract the trendsetters. Posts on Instagram or Facebook can easily increase awareness about new trends in fashion which can create",
  },
  {
    id: 4,
    title: "Top 10 Back to School Looks",
    image: "bs-blog-4.jpg",
    content:
      "Applying The Kids Design Guide Internet technology such as online retailers and social media platforms have given way for trends to be identified, marketed and sold immediately. Styles and trends are easily conveyed online to attract the trendsetters. Posts on Instagram or Facebook can easily increase awareness about new trends in fashion which can create",
  },
];

export default function Blog() {
  return (
    <>
      <TitlePage>VinaTeddy Blog</TitlePage>
      <Container maxWidth="lg">
        <Grid container spacing={8} padding={"60px 0"}>
          <Grid item xs={12} sm={12} md={8}>
            {blogs.map((blog) => (
              <BlogPreview key={blog.id} {...blog} />
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
                {popularPosts.map((post: PopularPostProps) => (
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
