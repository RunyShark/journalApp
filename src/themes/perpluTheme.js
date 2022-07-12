import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const perpluTheme = createTheme({
  palette: {
    primary: {
      main: "#006d77",
    },
    secondary: {
      main: "#83c5be",
    },
    error: {
      main: red.A400,
    },
  },
});
