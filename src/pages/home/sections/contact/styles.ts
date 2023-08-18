import { Theme } from "@mui/material";

export function createStyle(theme?: Theme): {
    [key: string]: React.CSSProperties;
} {
    return {
        container: {
            display: "flex",
            flexDirection: "column",
            paddingTop: "5vh",
            paddingInline: "5vw",
        },
        titleSpan: {
            color: theme?.palette.primary.main,
        },
        titleContainer: {
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            marginBottom: "8vh",
        },
        cardContainer: { display: "flex", justifyContent: "center" },
        divider: {
            height: 2,
            flex: 1,
            backgroundColor: theme?.palette.divider,
            marginLeft: "5%",
            borderRadius: 10,
            marginTop: 30,
        },
    };
}
