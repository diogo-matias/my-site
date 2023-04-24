import { Theme } from "@mui/material";
import { hexToRGBA } from "../../utils/colors";

export function createStyle(theme?: Theme): {
  [key: string]: React.CSSProperties;
} {
  return {
    container: {
      display: "flex",
      width: "100%",
      aspectRatio: "1/1",
      backgroundColor: "white",
      borderRadius: 10,
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      boxShadow: `1px 1px 20px ${hexToRGBA(theme?.palette.primary.main, 0.3)}`,
      border: `2px solid white`,
      color: "black",
      opacity: "0.8",
      transition: "0.3s",
    },
    hoverContainer: {
      cursor: "pointer",
      opacity: "1",
      boxShadow: `1px 1px 100px ${hexToRGBA(
        theme?.palette.primary.light,
        0.3
      )}`,
    },

    titleContainer: {
      alignSelf: "flex-end",
      backgroundColor: "white",
      width: "100%",
      display: "flex",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      transition: "0.3s",
    },
    titleContainerHover: {
      height: 0,
    },
  };
}
