import { styled, Switch, Theme } from "@mui/material";
import { hexToRGBA } from "../../utils/colors";
import { red } from "@mui/material/colors";

export const STYLES = {
    HEADER_HEIGHT: 50,
};

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
            height: STYLES.HEADER_HEIGHT,
            top: "3vh",
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
            paddingRight: "1%",
        },
        span: {
            fontWeight: 400,
        },
        mobileButtonContainer: {
            paddingRight: 20,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
        },
    };
}

export const Root = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
        backgroundColor: red[500],
    },
}));
