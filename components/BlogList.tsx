import { Box, Grid, Link, Typography } from "@mui/material";
import * as React from "react";
import Blog, { BlogProps } from "./BlogCard";
import { useRouter } from "next/router";

export interface BlogsProps {
  blogs: BlogProps[];
}

export default function BlogList({ blogs }: BlogsProps) {
  const route = useRouter();
  const handleClick = (id: string) => {
    route.push(`/blog/${id}`);
  };
  return (
    <Box marginBottom={"200px"} style={{ textAlign: "center" }}>
      <Box marginTop={"200px"}>
        <Typography
          fontFamily={"Hensa"}
          fontSize={"64px"}
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          {"From The Blog"}
        </Typography>
        <Typography variant="h6" textAlign={"center"} color={"#777777"}>
          We’ve picked few pieces we’re pretty sure you’ll love
        </Typography>
        <Typography variant="h6" textAlign={"center"} color={"#777777"}>
          Check back often and enjoy.
        </Typography>
      </Box>
      <Grid container spacing={4} marginTop={"50px"} marginBottom={"50px"}>
        {blogs.map((blog) => (
          <Grid key={blog.id} item xs={12} md={4}>
            <Link
              sx={{ textDecoration: "none" }}
              onClick={() => {
                handleClick(String(blog.id));
              }}
            >
              <Blog {...blog} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
