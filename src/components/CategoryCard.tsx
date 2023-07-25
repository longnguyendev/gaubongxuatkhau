import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

export interface CategoryCardCardProps {
  id: number;
  title: string;
  image: string;
  type: string;
}

export function CategoryCard({ title, image, type }: CategoryCardCardProps) {
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
            position="absolute"
            sx={{ bottom: "10%", left: "7%", right: "7%" }}
          >
            <Typography
              fontSize="40px"
              fontFamily="Hensa"
              color="#fff"
              sx={{ textShadow: "0px 0px 6px rgba(0,0,0,.2)" }}
            >
              {title}
            </Typography>
            <Typography
              color="#fff"
              fontSize="20px"
              fontWeight="700"
              sx={{ wordWrap: "break-word" }}
            >
              {type}
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
}
