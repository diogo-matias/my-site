import { Theme } from "@mui/material";

export function createStyle(theme?: Theme): {
    [key: string]: React.CSSProperties;
} {
    return {
        container: {
            display: "flex",
            flexDirection: "column",
            paddingTop: "10vh",
            paddingInline: "5vw",
        },
        titleSpan: {
            color: theme?.palette.primary.main,
        },
        titleContainer: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "4vh",
        },
        cardContainer: { display: "flex", justifyContent: "center" },
    };
}
