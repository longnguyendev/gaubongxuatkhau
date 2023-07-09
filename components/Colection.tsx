import * as React from "react";

import Box from "@mui/joy/Box";
import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default function Collection() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4} marginTop={"50px"} marginBottom={"50px"}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardActionArea
                sx={{
                  position: "relative",
                  ":after": {
                    content: '""',
                    position: "absolute",
                    inset: "10px",
                    border: "2px dashed #fff",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  width="100%"
                  image="/banner-girls-home.jpg"
                  alt="green iguana"
                />
                <Box
                  position={"absolute"}
                  sx={{ top: "50%", bottom: "5%", left: "7%", right: "7%" }}
                >
                  {" "}
                  <Typography variant="h2" fontFamily={"Hensa"} color={"#fff"}>
                    Girls
                  </Typography>
                  <Typography
                    variant="h4"
                    color={"#fff"}
                    fontSize={"27"}
                    fontWeight={"700"}
                    sx={{ wordWrap: "break-word" }}
                  >
                    Clothing
                  </Typography>
                  <Typography color={"#fff"}>{"Wolrd's Best Brand"}</Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                position: "relative",
              }}
            >
              <CardActionArea
                sx={{
                  position: "relative",
                  ":after": {
                    content: '""',
                    position: "absolute",
                    inset: "10px",
                    border: "2px dashed #fff",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  width="100%"
                  image="/banner-boys-home.jpg"
                  alt="green iguana"
                />
                <Box
                  position={"absolute"}
                  sx={{ top: "50%", bottom: "5%", left: "7%", right: "7%" }}
                >
                  {" "}
                  <Typography variant="h2" fontFamily={"Hensa"} color={"#fff"}>
                    Girls
                  </Typography>
                  <Typography
                    variant="h4"
                    color={"#fff"}
                    fontSize={"27"}
                    fontWeight={"700"}
                    sx={{ wordWrap: "break-word" }}
                  >
                    Clothing
                  </Typography>
                  <Typography color={"#fff"}>
                    {"Increddible Quality"}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                position: "relative",
              }}
            >
              <CardActionArea
                sx={{
                  position: "relative",
                  ":after": {
                    content: '""',
                    position: "absolute",
                    inset: "10px",
                    border: "2px dashed #fff",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  width="100%"
                  image="/banner-toys-home.jpg"
                  alt="green iguana"
                />
                <Box
                  position={"absolute"}
                  sx={{ top: "50%", bottom: "5%", left: "7%", right: "7%" }}
                >
                  {" "}
                  <Typography variant="h2" fontFamily={"Hensa"} color={"#fff"}>
                    Toys
                  </Typography>
                  <Typography
                    variant="h4"
                    color={"#fff"}
                    fontSize={"27"}
                    fontWeight={"700"}
                    sx={{ wordWrap: "break-word" }}
                  >
                    {"&Game"}
                  </Typography>
                  <Typography color={"#fff"}>{"For all ages"}</Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
