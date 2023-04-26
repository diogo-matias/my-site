import { Theme } from "@mui/material";
import { hexToRGBA } from "../../utils/colors";

export function createStyle(theme?: Theme): {
    [key: string]: React.CSSProperties;
} {
    return {
        container: {
            display: "flex",
            position: "relative",
            justifyContent: "center",
            width: "100%",
            aspectRatio: "1/1",
            backgroundColor: theme?.palette.background.paper,

            opacity: "0.9",
            overflow: "hidden",
            transition: "0.3s",
        },
        hoverContainer: {
            cursor: "pointer",
            opacity: "1",
        },

        titleContainer: {
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            paddingRight: "10%",
            paddingLeft: "10%",
            backgroundColor: `${hexToRGBA(
                theme?.palette.background.default,
                0.5
            )}`,
            opacity: "0%",
            backdropFilter: "blur(5px)",
            position: "absolute",
            overflow: "hidden",
            transition: "0.5s",
        },
        titleContainerHover: {
            opacity: "100%",
        },
        backgroundImage: { height: "100%" },
        title: {
            marginBottom: 2,
        },
    };
}
