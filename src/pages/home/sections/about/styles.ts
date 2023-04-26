import { Theme } from "@mui/material";

export function createStyle(theme?: Theme): {
    [key: string]: React.CSSProperties;
} {
    return {
        container: {
            height: "100vh",
            paddingTop: "10vh",
            paddingInline: "5vw",
            // backgroundColor: "red",
        },
        title: {
            marginBottom: 5,
        },
        titleSpan: {
            color: theme?.palette.primary.main,
        },
        experienceTitle: {
            marginTop: 5,
            marginBottom: 5,
        },
        paper: {
            width: "100%",
            aspectRatio: "1/1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            padding: 4,
            borderRadius: 5,
        },
        logo: {
            width: "100%",
            filter:
                theme?.palette.mode === "light"
                    ? "brightness(0) saturate(0%)"
                    : "brightness(100) saturate(0%)",
        },
        cardsContainer: { display: "flex", gap: 20, flexDirection: "column" },
        cardTitle: {
            marginBottom: 10,
        },
    };
}
