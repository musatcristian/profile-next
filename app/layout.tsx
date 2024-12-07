import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import type { Metadata } from "next";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { CssBaseline } from "@mui/material";
import localFont from "next/font/local";
import { Raleway, Acme } from "next/font/google";

import "./globals.css";
import theme from "./theme";

const displayFont = localFont({
  src: "./fonts/Tomorrow-ThinItalic.ttf",
  variable: "--font-display",
  weight: "100 300",
  display: "swap",
});
// const textFont = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-regular",
//   weight: "400 700",
//   display: "swap",
// });

const textFont = Raleway({
  subsets: ["latin"],
  variable: "--font-regular",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const acme = Acme({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-fallback",
});

export const metadata: Metadata = {
  title: "My Profile",
  description: "A showcase app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${textFont.variable} ${acme.variable}`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
