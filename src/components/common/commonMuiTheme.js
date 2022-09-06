import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#6a4f4b",
      main: "#3e2723",
      dark: "#1b0000",
      contrastText: "#fff",
    },
  },
  typography: {
    h4: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "2.125rem",
      },
    },
    h5: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
  },
});
