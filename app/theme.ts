"use client";

import createTheme from "@mui/material/styles/createTheme";

const tt = createTheme({
  typography: {
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
        "ul, li": {
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
