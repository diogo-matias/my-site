import { Typography, styled, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Man3d } from "@components";
import { MyButton } from "components/myButton";

import { createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";
import { scrollToWithPadding } from "@hooks/scroll";
import useWindowDimensions from "@hooks/windowDimentions";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { SOCIAL } from "@constants/social";
import { STYLES } from "components/header/styles";
import { STRINGS } from "language";

const StyledDiv = styled("div")(({ theme }) => ({
    paddingTop: "13vh",
    paddingLeft: "5vw",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down(600)]: {
        height: "75vh",
        justifyContent: "space-between",
    },
}));

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
    const { width } = useWindowDimensions();
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
        return (
            <StyledDiv>
                <div>
                    <Typography
                        style={styles.title}
                        variant="h2"
                        fontWeight={600}
                    >
                        {STRINGS.MAIN.TITLE}
                        <span style={styles.titleSpan}>
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
            </StyledDiv>
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

    return (
        <div style={styles.container} id={SECTIONS.PRESENTATION}>
            {renderBlack()}
            {renderTitle()}
            {render3d()}
        </div>
    );
}
