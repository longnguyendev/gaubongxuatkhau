import { KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Zoom,
  useScrollTrigger,
} from "@mui/material";
import { FC, MouseEvent } from "react";

interface ScrollTopProps {
  window?: () => Window;
}

export const ScrollTop: FC<ScrollTopProps> = ({ window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Button
          variant="dashed"
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            minWidth: "unset",
          }}
        >
          <KeyboardArrowUp />
        </Button>
      </Box>
    </Zoom>
  );
};
