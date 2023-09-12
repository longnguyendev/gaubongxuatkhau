
import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export interface PageTitleProps extends PropsWithChildren {
  title: string;
  // description?: string;
  // info?: { createdAt: string; category: string; categorySlug: string };

}

export function PageTitle({ title, children }: PageTitleProps) {
  return (
    <Box
      padding="80px 0"
      textAlign="center"
      sx={{
        backgroundImage: "url(../babystreet-title-background.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Typography fontSize="47px" color="#183a5c" fontWeight={700}>
        {title}
      </Typography>
      {/* {description && (
        <Typography fontSize="18px" color="#49a3b9" fontWeight={700}>
          {description}
        </Typography>
      )} */}
      {/* {info && (
        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          justifyContent="center"
        >
          <Folder sx={{ fontSize: "15px" }} />
          <Link
            href={`/blog/?category=${info.categorySlug}`}
            color="secondary"
            sx={{ textDecoration: "none", fontWeight: 500 }}
          >
            {info.category}
          </Link>
          <WatchLater sx={{ fontSize: "15px" }} />
          <Typography fontSize="15px">
            {new Date(Date.parse(info.createdAt)).toLocaleDateString("us-UK", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </Stack>
      )} */}
      {children}
    </Box>
  );
}
