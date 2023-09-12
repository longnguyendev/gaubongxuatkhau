import { Box, Toolbar } from "@mui/material";
import { PropsWithChildren } from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { ProgressBar } from "../ProgressBar";
import { ScrollTop } from "../ScrollTop";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <ProgressBar />
      <Header />
      <Toolbar
        id="back-to-top-anchor"
        sx={{ height: { xs: "70px", sm: "100px" } }}
      />
      {children}
      <Footer />
      <ScrollTop />
    </Box>
  );
}
