import { Typography, styled, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Man3d, TechCanvas } from "@components";
import { MyButton } from "components/myButton";

import { createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";
import { scrollToWithPadding } from "@hooks/scroll";
import useWindowDimensions from "@hooks/windowDimentions";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { SOCIAL } from "@constants/social";
import { STYLES } from "components/header/styles";
import { STRINGS } from "language";
import { climb } from "utils/math";
import { hexToRGBA } from "utils/colors";

// const StyledDiv = styled("div")(({ theme }) => ({
//     position: "absolute",
//     zIndex: 1,
//     paddingTop: "13vh",
//     paddingLeft: "5vw",
//     display: "flex",
//     flexDirection: "column",
//     height: "75vh",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: "auto",
//     backgroundColor: "red",

//     [theme.breakpoints.down(600)]: {
//         justifyContent: "space-between",
//     },
// }));

const ButtonContainer = styled("div")(({ theme }) => ({
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    gap: 20,
    fontSize: 30,
}));

export default function Presentation(): React.ReactElement {
    const theme = useTheme();
    const styles = createStyle(theme);
    const { width, height } = useWindowDimensions();
    const [isLoading, setIsLoading] = useState();

    function handleProjectsButtonClick() {
        scrollToWithPadding(SECTIONS.PROJECTS, STYLES.HEADER_HEIGHT);
    }

    function handleNavigation(link: string) {
        window.open(link, "_blank");
    }

    function renderButtons() {
        return (
            <ButtonContainer>
                <MyButton
                    variant="contained"
                    onClick={handleProjectsButtonClick}
                >
                    {STRINGS.MAIN.PROJECTS_BUTTON}
                </MyButton>
                <SiGithub
                    style={styles.button}
                    onClick={() => handleNavigation(SOCIAL.GITHUB)}
                />
                <SiLinkedin
                    style={styles.button}
                    onClick={() => handleNavigation(SOCIAL.LINKEDIN)}
                />
            </ButtonContainer>
        );
    }

    function renderTitle() {
        const shouldUseTextGlow = theme.palette.mode === "dark";

        return (
            <div
                style={{
                    position: "absolute",

                    left: 0,
                    right: 0,
                    marginInline: "auto",
                    width: "fit-content",
                    zIndex: 1,
                    top: "40%",
                }}
            >
                <div>
                    <Typography
                        style={{
                            ...styles.title,
                            textShadow: shouldUseTextGlow
                                ? `0px 0px 100px ${theme.palette.getContrastText(
                                      theme.palette.background.default
                                  )}`
                                : "",
                        }}
                        variant="h1"
                        fontWeight={600}
                    >
                        {STRINGS.MAIN.TITLE}
                        <span
                            style={{
                                ...styles.titleSpan,
                                textShadow: shouldUseTextGlow
                                    ? `0px 0px 100px ${hexToRGBA(
                                          theme.palette.primary.main,
                                          50
                                      )}`
                                    : "",
                            }}
                        >
                            {" "}
                            {STRINGS.MAIN.NAME}
                        </span>
                    </Typography>
                    <Typography
                        variant="h5"
                        fontWeight={100}
                        style={{ marginRight: 30, textAlign: "center" }}
                    >
                        {STRINGS.MAIN.SUBTITLE}
                    </Typography>
                </div>
                {renderButtons()}
            </div>
        );
    }

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);

    function render3d() {
        return <Man3d />;
    }

    function renderBlack() {
        if (width < 475) {
            return <div style={styles.black} />;
        }
    }

    // function renderTitle(){
    //     return (
    //         <div>
    //             <Typography>

    //             </Typography>
    //         </div>
    //     )
    // }

    return (
        <div
            style={{
                // backgroundColor: "red",
                height: "100vh",
                width: "100%",
                position: "relative",
            }}
            id={SECTIONS.PRESENTATION}
        >
            {renderTitle()}
            {/* {renderTechCanvas()} */}
        </div>
    );
}
