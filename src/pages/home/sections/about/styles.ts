import { Theme } from "@mui/material";

export function createStyle(theme?: Theme): {
    [key: string]: React.CSSProperties;
} {
    return {
        container: {
            paddingTop: "10vh",
            paddingInline: "5vw",
        },
        titleContainer: {
            display: "flex",
            alignItems: "center",
            marginBottom: "5%",
        },
        title: {
            marginBottom: 5,
        },
        titleSpan: {
            color: theme?.palette.primary.main,
        },
        experienceTitle: {
            marginTop: "5%",
            marginBottom: "5%",
        },
        logo: {
            width: "100%",
            filter:
                theme?.palette.mode === "light"
                    ? "brightness(0) saturate(0%)"
                    : "brightness(100) saturate(0%)",
        },
        cardsContainer: { display: "flex", gap: 20, flexDirection: "column" },

        tagsContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        divider: {
            height: 2,
            flex: 1,
            backgroundColor: theme?.palette.divider,
            marginLeft: "5%",
            borderRadius: 10,
        },
    };
}
