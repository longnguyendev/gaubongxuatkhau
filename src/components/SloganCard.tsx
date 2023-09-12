import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";

export interface sloganCardProps {
  id: number;
  title: string;
  image: string;
  type: string;
  description: string;
}

export function SloganCard({
  title,
  image,
  type,
  description,
}: sloganCardProps) {
  return (
    <>
      <Card
        variant="outlined"
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
            img: {
              transform: "scale(1.1)",
            },
          },
        }}
      >
        <Box position="relative" width="100%" sx={{ aspectRatio: 6 / 4 }}>
          <Image
            src={`/${image}`}
            alt={title}
            sizes="100vw"
            fill
            style={{ transition: "0.2s ease-in" }}
          />
        </Box>
        <Box position="absolute" sx={{ bottom: "5%", left: "7%", right: "7%" }}>
          <Typography fontFamily="SVN-Arsilon" fontSize="3.75rem" color="white">
            {title}
          </Typography>
          <Typography
            color="white"
            fontSize={27}
            fontWeight={700}
            sx={{ wordWrap: "break-word" }}
          >
            {type}
          </Typography>
          <Typography color="white">{description}</Typography>
        </Box>
      </Card>
    </>
  );
}
