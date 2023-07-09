import { Box, Button, Grid, Typography } from '@mui/material';
import * as React from 'react';


export default function BannerMid () {
  return (
    <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              backgroundImage: "url(/back-dark-blue-section.jpg)",
              width: "100%",
              height: "600px  ",
              backgroundSize: "cover",
              backgroundPosition: "cennter center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "150px",
                textAlign: "center",
              }}
            >
              <Typography color={"#81d1e5"} fontSize={"19px"} fontWeight={700}>
                BACK TO SCHOOL
              </Typography>
              <Typography
                variant="h3"
                fontFamily={"Hensa"}
                color={"#fff"}
                fontSize={"72px"}
              >
                Girls Collection
              </Typography>
              <Typography color={"#fff"} fontSize={"19px"} fontWeight={500}>
                We celebrate childhood by supporting babies, children, and
                families
              </Typography>
              <Typography color={"#fff"} fontSize={"19px"} fontWeight={500}>
                with thoughtful designs, quality materials and construction,
              </Typography>
              <Typography color={"#fff"} fontSize={"19px"} fontWeight={500}>
                and convenient shopping options.
              </Typography>
              <Button
                variant="dashed"
                sx={{ padding: "14px 20px", marginTop: "50px" }}
              >
                Shop Collection
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundImage: "url(/back-school-kids.jpg)",
              width: "100%",
              height: "600px  ",
              backgroundSize: "cover",
              backgroundPosition: "center  center",
            }}
          />
        </Grid>
      </Grid>
  );
}
