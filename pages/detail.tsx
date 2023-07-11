import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import * as React from "react";
import { useState } from "react";

export interface IAppProps {}

export default function Detail() {
  const [value, setValue] = useState("1");
  const handelValue = (newValue: string): void => {
    setValue(newValue);
  };
  return (
    <>
      <Container maxWidth={"xl"}>
        <Grid container spacing={0} marginTop={"150px"}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              width="100%"
              image={"/baby-prod21-1.jpg"}
              alt="green iguana"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ padding: { sx: "0", md: "80px" } }}>
            <Typography fontSize={"40px"} color={"#333"} fontWeight={700}>
              Stuffed Blue Shark
            </Typography>
            <Typography>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </Typography>
            <Typography fontSize={"30px"} color={"#333"}>
              $29.99
            </Typography>
            <Box>
              <input
                size={4}
                inputMode="numeric"
                type="number"
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "50%",
                  fontSize: "15px",
                  fontWeight: "bold",
                  lineHeight: "46px",
                  textAlign: "center",
                  color: "#666",
                  border: "none",
                  background: "#f5f5f5",
                  margin: "15px",
                  WebkitAppearance: "none",
                }}
                value={value}
                onChange={(e) => {
                  handelValue(e.target.value);
                }}
              />
              <Button
                variant="dashed"
                sx={{
                  padding: "12px 40px",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                }}
              >
                Add to cart
              </Button>
              <Button>
                <FavoriteBorderIcon color="info" />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
