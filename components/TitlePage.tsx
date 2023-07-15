import { Box, Typography } from "@mui/material";
import * as React from "react";

export interface TitlePageProps {
  children: string;
}

export default function TitlePage({ children }: TitlePageProps) {
  return (
    <Box
      padding={"80px 0"}
      textAlign={"center"}
      sx={{
        backgroundImage: "url(babystreet-title-background.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Typography fontSize={"47px"} color={"#183a5c"} fontWeight={700}>
        {children}
      </Typography>
    </Box>
  );
}
