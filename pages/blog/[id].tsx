import TitlePage from "@/components/TitlePage";
import { useRouter } from "next/router";
import * as React from "react";
import { blogs } from "./constants";
import { Box, Container, Typography } from "@mui/material";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const route = useRouter();
  const id = route.query.id;
  const blog = blogs.find((blog) => blog.id === Number(id));
  return (
    <>
      <TitlePage>{blog?.title}</TitlePage>
      <Container maxWidth="lg">
        <Box padding={"80px 0"}>
          <Box component="img" src={`/${blog?.image}`} />
          <Typography>{blog?.content}</Typography>
        </Box>
      </Container>
    </>
  );
}
