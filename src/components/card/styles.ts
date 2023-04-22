import { Theme } from "@mui/material";
import { hexToRGBA } from "../../utils/colors";

export function createStyle(theme?: Theme): {
    [key: string]: React.CSSProperties;
} {
    return {
        container: {
            display: "flex",
            width: 300,
            height: 300,
            backgroundColor: "white",
            borderRadius: 10,
            margin: 10,
            overflow: "hidden",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            boxShadow: `1px 1px 20px ${hexToRGBA(
                theme?.palette.primary.main,
                0.3
            )}`,
            border: `2px solid white`,
            color: "black",
        },
        titleContainer: {
            alignSelf: "flex-end",
            backgroundColor: "white",
            width: "100%",
            display: "flex",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
        },
    };
}
