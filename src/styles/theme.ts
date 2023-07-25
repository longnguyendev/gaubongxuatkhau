import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: ["Quicksand", "Hensa"].join(","),
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed", color: "primary" },
          style: {
            position: "relative",
            backgroundColor: "#ff8087",
            color: "white",
            borderRadius: "50px",

            ":hover": {
              backgroundColor: "#57c1db",
            },
            ":after": {
              content: '""',
              position: "absolute",
              top: "3px",
              bottom: "3px",
              left: "3px",
              right: "3px",
              border: "2px dashed #fff",
              borderRadius: "50px",
            },
          },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            position: "relative",
            backgroundColor: "#81d1e5",
            color: "white",
            borderRadius: "50px",
            ":hover": {
              backgroundColor: "#57c1db",
            },
            ":after": {
              content: '""',
              position: "absolute",
              inset: "3px",
              border: "2px dashed #fff",
              borderRadius: "50px",
            },
          },
        },
      ],
    },
  },
});
