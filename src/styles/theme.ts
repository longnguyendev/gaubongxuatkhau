import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8087",
    },
    secondary: {
      main: "#81d1e5",
    },
  },
  typography: {
    fontFamily: ["Quicksand", "SVN-Arsilon", "Hensa"].join(","),
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
            textTransform: "none",
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
            textTransform: "none",
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
