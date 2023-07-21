import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

export interface ColectionCardProps {
  id: number;
  title: string;
  image: string;
  type: string;
  description: string;
}

export default function ColectionCard({
  title,
  image,
  type,
  description,
}: ColectionCardProps) {
  return (
    <>
      <Card>
        <CardActionArea
          className="collection-card"
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
            className="collection-card-image"
            component="img"
            width="100%"
            image={image}
            alt={image}
          />
          <Box
            position={"absolute"}
            sx={{ bottom: "5%", left: "7%", right: "7%" }}
          >
            <Typography variant="h2" fontFamily={"Hensa"} color={"#fff"}>
              {title}
            </Typography>
            <Typography
              variant="h4"
              color={"#fff"}
              fontSize={"27"}
              fontWeight={"700"}
              sx={{ wordWrap: "break-word" }}
            >
              {type}
            </Typography>
            <Typography color={"#fff"}>{description}</Typography>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
}
