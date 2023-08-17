import { Theme } from "@mui/material";
import { hexToRGBA } from "utils/colors";

export function createStyle(theme: Theme): {
    [key: string]: React.CSSProperties;
} {
    const background = theme.palette.background.default;

    return {
        container: {
            boxSizing: "content-box",
            overflow: "hidden",
            backgroundImage: `linear-gradient(${background} 20%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 60%,   ${background} 90%`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "110vh",
        },
        titleContainer: {
            paddingTop: "13vh",
            paddingLeft: "5vw",
        },
        title: {
            letterSpacing: -5,
        },
        titleSpan: {
            color: theme.palette.primary.main,
        },
        buttonsContainer: {
            marginTop: 10,
        },
        black: {
            backgroundColor: hexToRGBA(theme.palette.background.default, 0.6),
            position: "absolute",
            height: "100vh",
            left: 0,
            right: 0,
            zIndex: -1,
        },
    };
}
