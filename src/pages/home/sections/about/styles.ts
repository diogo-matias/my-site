import { Theme } from "@mui/material";

export function createStyle(theme?: Theme): {
  [key: string]: React.CSSProperties;
} {
  return {
    container: {
      height: "100vh",
      paddingTop: "10vh",
      paddingInline: "5vw",
      //   backgroundColor: "red",
    },
    titleSpan: {
      color: theme?.palette.primary.main,
    },
    titleContainer: {},
  };
}
