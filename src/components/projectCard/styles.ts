import { Box, styled } from "@mui/material";
import { hexToRGBA } from "utils/colors";

export function CustomCard(pattern1: boolean) {
    const Card = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        zIndex: 1,
        gridColumnEnd: pattern1 ? 8 : -1,
        gridColumnStart: pattern1 ? 1 : 6,
        gridRowStart: 1,
        gridRowEnd: -1,
        maxHeight: 500,
        aspectRatio: "16 / 9",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: `0px 0px 20px ${hexToRGBA("#000000", 0.3)}`,
        transition: "0.5s",
        cursor: "pointer",
    }));

    return Card;
}

export const CustomImg = styled("img")(({ theme }) => ({
    width: "100%",
    minHeight: "100%",
    opacity: "0.8",
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
