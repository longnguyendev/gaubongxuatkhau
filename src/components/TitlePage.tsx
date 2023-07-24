import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export interface titlePageProps {
  title: string;
  description?: string;
}

export default function TitlePage({ title, description }: titlePageProps) {
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
        {title}
      </Typography>
      <Typography fontSize={"18px"} color={"#49a3b9"} fontWeight={700}>
        {description}
      </Typography>
    </Box>
  );
}
