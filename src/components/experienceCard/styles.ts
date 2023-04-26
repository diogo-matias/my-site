import { Theme } from "@mui/material";

export function createStyle(theme?: Theme): {
    [key: string]: React.CSSProperties;
} {
    return {
        container: { display: "flex" },
        paper: {
            width: "100%",
            aspectRatio: "1/1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            padding: 4,
            borderRadius: 5,
            cursor: "pointer",
        },
        logo: {
            width: "100%",
            filter:
                theme?.palette.mode === "light"
                    ? "brightness(0) saturate(0%)"
                    : "brightness(100) saturate(0%)",
        },
        cardTitle: {
            marginBottom: 10,
        },
    };
}
