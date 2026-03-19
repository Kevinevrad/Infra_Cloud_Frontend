import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#81bb26",
      dark: "#5e8c1a",
      light: "#a6d85a",
      contrastText: "#ffffff",
    },

    background: {
      default: "#f9fafb",
      paper: "#ffffff",
    },

    text: {
      primary: "#1a1a1a",
      secondary: "#6b7280",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h4: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none", // 🔥 enlève MAJUSCULES
      fontWeight: 600,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 16px",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#81bb26",
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#81bb26",
          "&.Mui-checked": {
            color: "#81bb26",
          },
        },
      },
    },
  },
});

export default theme;
