import { Box, Button, Typography } from "@mui/material";
import * as React from "react";

export default function Banner() {
  return (
    <>
      <Box height={{ xs: "70px", sm: "100px" }} />
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          backgroundImage: "url(/test-baby-hero2.jpg)",
          backgroundSize: "cover",
          objectFit: "cover",
          height: "90vh",
          backgroundPosition: "top center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            position={"relative"}
            textAlign={"center"}
          >
            Connect Heart
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            Your Paradise
          </Typography>
          <Box>
            <Button
              variant="dashed"
              sx={{ py: "14px", px: "20px", fontWeight: 700, mr: 1 }}
            >
              Shop Girls
            </Button>
            <Button
              variant="dashed"
              color="secondary"
              sx={{ py: "14px", px: "20px", fontWeight: 700 }}
            >
              Shop Boys
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
              backgroundSize: "50% 100px",
              backgroundImage: "url(/wave-bot.png)",
              position: "absolute",
              left: 0,
              width: "200%",
              height: "100%",
              backgroundRepeat: "repeat no-repeat",
              backgroundPosition: "0 bottom",
              transformOrigin: "center bottom",
              zIndex: 5,
              animation: "move-wave 15s linear infinite",
            }}
          ></Box>
          <Box
            sx={{
              backgroundSize: "50% 120px",
              backgroundImage: "url(/wave-mid.png)",
              position: "absolute",
              left: 0,
              width: "200%",
              height: "100%",
              backgroundRepeat: "repeat no-repeat",
              backgroundPosition: "0 bottom",
              transformOrigin: "center bottom",
              zIndex: 10,
              opacity: 0.75,
              animation: "move-wave 10s linear infinite",
            }}
          ></Box>
          <Box
            sx={{
              backgroundSize: "50% 100px",
              backgroundImage: "url(/wave-top.png)",
              position: "absolute",
              left: 0,
              width: "200%",
              height: "100%",
              backgroundRepeat: "repeat no-repeat",
              backgroundPosition: "0 bottom",
              transformOrigin: "center bottom",
              zIndex: 15,
              opacity: 0.5,
              animationDelay: "1s",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
