import { Box, Button, Grid, Typography } from "@mui/material";
import Blog, { BlogProps } from "./BlogCard";

export interface BlogsProps {
  blogs: BlogProps[];
}

export default function BlogList({ blogs }: BlogsProps) {
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
            <Blog {...blog} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
