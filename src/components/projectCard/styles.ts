import { Breakpoint, useTheme } from "@mui/material";
import { Box, styled } from "@mui/material";
import { hexToRGBA } from "utils/colors";

export function CustomCard(pattern1?: boolean, breakpoint?: Breakpoint) {
    let aspectRatio: string;

    switch (breakpoint) {
        case "sm":
            aspectRatio = "1 / 1.5";
            break;

        case "md":
            aspectRatio = "16 / 11";
            break;

        default:
            aspectRatio = "16 / 9";
            break;
    }

    const Card = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        right: 0,
        zIndex: 1,
        gridColumnEnd: pattern1 ? 8 : -1,
        gridColumnStart: pattern1 ? 1 : 6,
        gridRowStart: 1,
        gridRowEnd: -1,
        maxHeight: 600,
        height: "100%",
        aspectRatio,
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: `0px 0px 20px ${hexToRGBA("#000000", 0.3)}`,
        transition: "0.5s",
        cursor: "pointer",
    }));

    return Card;
}

export const CustomImg = styled("img")(({ theme }) => ({
    minWidth: "100%",
    height: "100%",
    opacity: "0.9",
    cursor: "pointer",
    filter: `grayscale(100%) ${
        theme.palette.mode === "dark" ? "brightness(100%)" : ""
    }`,
    transition: "0.5s",
    "&:hover": {
        opacity: "1",
        filter: "grayscale(0)",
    },
}));
