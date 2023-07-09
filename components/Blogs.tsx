import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import ProductCard from "./Card";

export interface IAppProps {}

export default function Blogs() {
  return (
    <Box marginBottom={"200px"}>
      <Container maxWidth="xl" style={{ textAlign: "center" }}>
        <Box marginTop={"200px"}>
          <Typography
            fontFamily={"Hensa"}
            fontSize={"64px"}
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            {"From The Blog"}
          </Typography>
          <Typography variant="h6" textAlign={"center"} color={"#777777"}>
            We’ve picked few pieces we’re pretty sure you’ll love
          </Typography>
          <Typography variant="h6" textAlign={"center"} color={"#777777"}>
            Check back often and enjoy.
          </Typography>
        </Box>
        <Grid container spacing={4} marginTop={"50px"} marginBottom={"50px"}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardActionArea>
                <Box position={"relative"}>
                  <CardMedia
                    component="img"
                    width="100%"
                    image="/bs-blog-1-640x640.jpg"
                    alt="green iguana"
                  />
                  <Box
                    position={"absolute"}
                    sx={{ inset: "10px", border: "2px dashed #fff" }}
                  ></Box>
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"left"}
                    fontWeight={700}
                    fontSize={"27px"}
                    color={"#545454"}
                  >
                    Why February Babies Are Extra Special
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardActionArea>
                <Box position={"relative"}>
                  <CardMedia
                    component="img"
                    width="100%"
                    image="/bs-blog-2-640x640.jpg"
                    alt="green iguana"
                  />
                  <Box
                    position={"absolute"}
                    sx={{ inset: "10px", border: "2px dashed #fff" }}
                  ></Box>
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"left"}
                    fontWeight={700}
                    fontSize={"27px"}
                    color={"#545454"}
                  >
                    The Surprising Way Motherhood Changed Me
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardActionArea>
                <Box position={"relative"}>
                  <CardMedia
                    component="img"
                    width="100%"
                    image="/bs-blog-3-640x640.jpg"
                    alt="green iguana"
                  />
                  <Box
                    position={"absolute"}
                    sx={{ inset: "10px", border: "2px dashed #fff" }}
                  ></Box>
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"left"}
                    fontWeight={700}
                    fontSize={"27px"}
                    color={"#545454"}
                  >
                    How Aromatherapy Can Impact NICU Babies
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Button variant="dashed" color="secondary" sx={{ padding: "10px" }}>
          Shop all product
        </Button>
      </Container>
    </Box>
  );
}
