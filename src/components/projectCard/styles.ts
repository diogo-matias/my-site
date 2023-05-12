import { Breakpoint, useTheme } from "@mui/material";
import useWindowDimensions from "@hooks/windowDimentions";
import { Box, styled } from "@mui/material";
import { hexToRGBA } from "utils/colors";

export function CustomCard(pattern1?: boolean, breakpoint?: Breakpoint) {
    const Card = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        position: "relative",
        right: 0,
        zIndex: 1,
        gridColumnEnd: pattern1 ? 8 : -1,
        gridColumnStart: pattern1 ? 1 : 6,
        gridRowStart: 1,
        gridRowEnd: -1,
        maxHeight: 500,
        height: "100%",
        aspectRatio: breakpoint === "sm" ? "1 / 1.2" : "16 / 9",
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
