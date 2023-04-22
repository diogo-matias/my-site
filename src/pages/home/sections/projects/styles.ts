import { Theme } from "@mui/material";

export function createStyle(theme?: Theme): {
    [key: string]: React.CSSProperties;
} {
    return {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            paddingTop: "10vh",
            paddingInline: 100,
        },
        titleSpan: {
            color: theme?.palette.primary.main,
        },
    };
}
