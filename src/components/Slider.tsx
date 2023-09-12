import { Box, IconButton, SxProps, Theme } from "@mui/material";
import { PropsWithChildren, useRef } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useCarousel } from "@/hooks";

const getButtonStyle =
  (props: SxProps<Theme>): SxProps<Theme> =>
  (theme) => ({
    position: "absolute",
    top: "50%",
    width: "60px",
    height: "60px",
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.85,
    textAlign: "center",
    lineHeight: "60px",
    color: "white",
    transform: "translateY(-50%)",
    ":after": {
      position: "absolute",
      content: "''",
      inset: "-5px",
      border: `2px dashed ${theme.palette.secondary.main}`,
      borderRadius: "50%",
    },
    ":hover": {
      opacity: 1,
      backgroundColor: theme.palette.secondary.main,
    },
    ...props,
  });

export function Slider({
  children,
  slidesToShow = 4,
}: PropsWithChildren<{ slidesToShow?: number }>) {
  const { ref, onNext, onBack, childrenWidth } = useCarousel({
    gap: 32,
    slidesToScroll: 1,
    slidesToShow,
  });
  return (
    <Box position="relative">
      <Box
        ref={ref}
        display="flex"
        columnGap={4}
        sx={{
          overflowX: "auto",
          ".MuiPaper-root": {
            width: childrenWidth,
            flexShrink: 0,
          },
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {children}
      </Box>
      {(ref.current?.scrollWidth ?? 0) > (ref.current?.offsetWidth ?? 0) && (
        <>
          <IconButton onClick={onBack} sx={getButtonStyle({ left: "-10px" })}>
            <ArrowBackIosNew />
          </IconButton>
          <IconButton onClick={onNext} sx={getButtonStyle({ right: "-10px" })}>
            <ArrowForwardIos />
          </IconButton>
        </>
      )}
    </Box>
  );
}
