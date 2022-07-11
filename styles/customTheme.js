import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const fonts = {
  ...chakraTheme.fonts,
  body: `Oxygen,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Oxygen,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  xxl: "90em",
  "2xl": "96em",
  "3xl": "98em",
};

const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontWeights: { light: 200, normal: 400, medium: 600, bold: 700 },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "32px",
    "5xl": "36px",
    "6xl": "48px",
    "7xl": "64px",
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
