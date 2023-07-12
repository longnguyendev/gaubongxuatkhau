import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";

export interface BlogPreviewProps {
  id: number;
  title: string;
  image: string;
  content: string;
}

export default function BlogPreview({
  title,
  image,
  content,
}: BlogPreviewProps) {
  return (
    <>
      <Grid item xs={12}>
        <Card>
          <CardActionArea>
            <Box position={"relative"}>
              <CardMedia
                component="img"
                width="100%"
                image={image}
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
                {title}
              </Typography>
              <Typography>{content}</Typography>
            </CardContent>
          </CardActionArea>
          <Button
            variant="dashed"
            sx={{ padding: "14px 20px", fontWeight: 700, margin: "30px 0" }}
          >
            continue reading
          </Button>
        </Card>
      </Grid>
    </>
  );
}
