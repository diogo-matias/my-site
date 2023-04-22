import { Theme } from "@mui/material";

export function createStyle(theme: Theme): {
    [key: string]: React.CSSProperties;
} {
    return {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
        },
        titleContainer: {
            paddingTop: 60,
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
