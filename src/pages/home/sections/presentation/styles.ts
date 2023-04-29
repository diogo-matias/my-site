import { Theme } from "@mui/material";

export function createStyle(theme: Theme): {
    [key: string]: React.CSSProperties;
} {
    const background = theme.palette.background.default;

    return {
        container: {
            boxSizing: "content-box",
            overflow: "hidden",
            backgroundImage: `linear-gradient(${background} 10%, rgba(0,0,0,0) 30%, ${background} 83%`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
        },
        titleContainer: {
            paddingTop: "10vh",
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
    };
}
