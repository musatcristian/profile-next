"use client";

import createTheme from "@mui/material/styles/createTheme";

const tt = createTheme({
  palette: {
    primary: {
      main: "#7B80AD",
      light: "#C8CCEE",
      dark: "#32386E",
      contrastText: "#EDE5C7",
    },
    secondary: {
      main: "#EDE5C7",
      light: "#C8CCEE",
      contrastText: "#988C5F",
      dark: "#32386E",
    },
    text: {
      disabled: "#EDE5C7",
      primary: "#32386E",
      secondary: "#C8CCEE",
    },
  },
  typography: {
    allVariants: {
      color: "#EDE5C7",
    },
    h1: {
      fontFamily: "var(--font-display)",
    },
    h2: {
      fontFamily: "var(--font-display)",
    },
    h3: {
      fontFamily: "var(--font-display)",
    },
    h4: {
      fontFamily: "var(--font-display)",
    },
    subtitle1: {
      fontFamily: "var(--font-display)",
    },
    subtitle2: {
      fontFamily: "var(--font-display)",
    },
    body1: {
      fontFamily: "var(--font-regular)",
    },
    body2: {
      fontFamily: "var(--font-regular)",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        main: {
          display: "flex",
          flex: 1,
          flexDirection: "column",
          gap: "16px",
          gridRowStart: 2,
          minWidth: "75%",
          alignItems: "center",

          margin: "1% 15%",
          borderRadius: "16px",
        },
        "footer > a": {},
        "ul, li, button": {
          fontFamily: "var(--font-display)",
        },
        "ol > li": {
          fontFamily: "var(--font-regular)",
        },
      },
    },
  },
});

export default tt;
