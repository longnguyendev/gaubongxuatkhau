import { Box } from "@mui/material";

export interface LabelProps {
  children: string;
}

export function Label({ children }: LabelProps) {
  return (
    <Box
      width="100%"
      padding="15px"
      sx={{
        background: "#81d1e5",
        fontSize: "18px",
        fontWeight: "bold",
        color: "white",
        borderRadius: "6px",
        position: "relative",
        ":after": {
          position: "absolute",
          content: "''",
          inset: "4px",
          border: "2px dashed #ffffff",
          borderRadius: "6px",
        },
      }}
    >
      {children}
    </Box>
  );
}
