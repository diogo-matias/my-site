import { Theme } from "@mui/material";

export function createStyle(theme?: Theme): {
    [key: string]: React.CSSProperties;
} {
    return {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "10vh",
            paddingInline: "5vw",
        },
        titleSpan: {
            color: theme?.palette.primary.main,
        },
        titleContainer: {
            marginBottom: "4vh",
        },
        cardContainer: { display: "flex", justifyContent: "center" },
    };
}
