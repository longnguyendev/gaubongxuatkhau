import TitlePage from "@/src/components/TitlePage";
import { useRouter } from "next/router";
import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import { blogs } from "../../store/constants";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const route = useRouter();
  const id = route.query.id;
  const blog = blogs.find((blog) => blog.id === Number(id));
  return (
    <>
      <TitlePage title={String(blog?.title)} />
      <Container maxWidth="lg">
        <Box padding={"80px 0"}>
          <Box component="img" src={`/${blog?.image}`} width={"100%"} />
          <Typography>{blog?.content}</Typography>
        </Box>
      </Container>
    </>
  );
}
