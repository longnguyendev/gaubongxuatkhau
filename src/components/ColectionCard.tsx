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
          sx={{
            position: "relative",
            ":after": {
              content: '""',
              position: "absolute",
              inset: "10px",
              border: "2px dashed #fff",
              borderRadius: "6px",
            },
            ":hover": {
              ".MuiCardMedia-root": {
                transform: "scale(1.1)",
              },
            },
          }}
        >
          <CardMedia
            component="img"
            width="100%"
            image={image}
            alt={image}
            sx={{ transition: "0.2s ease-in" }}
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
