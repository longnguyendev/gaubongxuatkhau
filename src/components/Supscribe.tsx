import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";

export function Supscribe() {
  return (
    <Box
      sx={{
        background: "#88cada ",
        padding: "45px 0",
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0} width="100%">
          <Grid item xs={12} sm={6}>
            <Typography fontSize="24px" color="white" fontWeight={700}>
              Subscribe to our Newsletter
            </Typography>
            <Typography color="white" fontSize="14px">
              Be the first to know about new products, sales and promotions.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
            <Box sx={{ position: "relative" }}>
              <InputBase
                placeholder="Your email"
                sx={{
                  padding: "18px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  height: "56px",
                  width: "100%",
                  borderRadius: "56px",
                  background: "rgba(255,255,255,0.15)",
                }}
              />
              <Button
                variant="dashed"
                sx={{
                  position: "absolute",
                  height: "100%",
                  right: 0,
                  padding: "11px 20px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  fontSize: "13px",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
