import { styled, Switch, Theme } from "@mui/material";
import { hexToRGBA } from "../../utils/colors";

export function createStyle(theme?: Theme): {
    [key: string]: React.CSSProperties;
} {
    return {
        container: {
            backgroundColor: hexToRGBA(theme?.palette.background.paper, 0.5),
            position: "fixed",
            zIndex: "999",
            display: "flex",
            alignItems: "center",
            maxWidth: "1280px",
            height: 50,
            top: "2vh",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 15,
            backdropFilter: "blur(50px)",
            boxShadow: `0px 4px 8px ${hexToRGBA("#000000", 0.1)}`,
        },
        links: {
            marginLeft: 5,
            cursor: "pointer",
            opacity: "0.5",
            transition: "0.5s",

            //@ts-ignore
            "&:hover": {
                opacity: "1",
            },
        },
        linkContainer: {
            display: "flex",
            justifyContent: "center",
        },
        buttonsContainer: {
            display: "flex",
            justifyContent: "flex-end",
            // backgroundColor: "red",
            paddingRight: "1%",
        },
    };
}
