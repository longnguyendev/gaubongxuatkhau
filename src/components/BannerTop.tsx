import {
  Box,
  Button,
  SxProps,
  Theme,
  Typography,
  keyframes,
  useMediaQuery,
} from "@mui/material";
import { Link } from "./Link";
import Image from "next/image";

const moveWave = keyframes`
0% {
  transform: translateX(0) translateZ(0) scaleY(1);
}
50% {
  transform: translateX(-25%) translateZ(0) scaleY(0.55);
}
100% {
  transform: translateX(-50%) translateZ(0) scaleY(1);
}
`;

const baseStyle: SxProps<Theme> = {
  position: "absolute",
  left: 0,
  width: "200%",
  height: "100%",
  backgroundRepeat: "repeat no-repeat",
  backgroundPosition: "0 bottom",
  transformOrigin: "center bottom",
};

export function BannerTop() {
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        height: `calc(100vh - ${isSm ? 100 : 70}px)`,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        alt="BannerTop"
        src="/fluffy-toy-texture-close-up.jpg"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          fontFamily="Hensa"
          color="white"
          position="relative"
          textAlign="center"
        >
          Connecting Heart
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "36px",
            fontWeight: 700,
            marginBottom: "35px",
          }}
        >
          Your Paradise
        </Typography>
        <Box>
          <Button
            LinkComponent={Link}
            href="/shop"
            variant="dashed"
            aria-label="go to shop"
            sx={{ py: "14px", px: "20px", fontWeight: 700, mr: 1 }}
          >
            Thú Bông
          </Button>
          <Button
            LinkComponent={Link}
            href="/shop"
            variant="dashed"
            color="secondary"
            sx={{ py: "14px", px: "20px", fontWeight: 700 }}
          >
            Gấu Bông
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "140px",
        }}
      >
        <Box
          sx={{
            ...baseStyle,
            backgroundSize: "50% 100px",
            backgroundImage: "url(/wave-bot.png)",
            zIndex: 5,
            animation: `${moveWave} 15s linear infinite`,
          }}
        ></Box>
        <Box
          sx={{
            ...baseStyle,
            backgroundSize: "50% 120px",
            backgroundImage: "url(/wave-mid.png)",
            zIndex: 10,
            opacity: 0.75,
            animation: `${moveWave} 10s linear infinite`,
          }}
        ></Box>
        <Box
          sx={{
            ...baseStyle,
            backgroundSize: "50% 100px",
            backgroundImage: "url(/wave-top.png)",
            zIndex: 15,
            opacity: 0.5,
            animationDelay: "1s",
          }}
        ></Box>
      </Box>
    </Box>
  );
}
