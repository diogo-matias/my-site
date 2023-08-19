import { Typography, useTheme } from "@mui/material";
import React from "react";

import { Man3d } from "@components";
import { MyButton } from "components/myButton";

import { createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";
import { scrollTo, scrollToWithPadding } from "@hooks/scroll";
import useWindowDimensions from "@hooks/windowDimentions";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { SOCIAL } from "@constants/social";
import { STYLES } from "components/header/styles";

export default function Presentation(): React.ReactElement {
    const theme = useTheme();
    const styles = createStyle(theme);
    const { width } = useWindowDimensions();

    function handleProjectsButtonClick() {
        scrollToWithPadding(SECTIONS.PROJECTS, STYLES.HEADER_HEIGHT);
    }

    function handleNavigation(link: string) {
        window.open(link, "_blank");
    }

    function renderButtons() {
        return (
            <div style={styles.buttonsContainer}>
                <MyButton
                    variant="contained"
                    onClick={handleProjectsButtonClick}
                >
                    Projects
                </MyButton>
                <SiGithub
                    style={styles.button}
                    onClick={() => handleNavigation(SOCIAL.GITHUB)}
                />
                <SiLinkedin
                    style={styles.button}
                    onClick={() => handleNavigation(SOCIAL.LINKEDIN)}
                />
            </div>
        );
    }

    function renderTitle() {
        return (
            <div style={styles.titleContainer}>
                <Typography style={styles.title} variant="h2" fontWeight={600}>
                    Hi there, i'm <span style={styles.titleSpan}>Diogo</span>
                </Typography>
                <Typography
                    variant="h5"
                    fontWeight={100}
                    style={{ marginRight: 30 }}
                >
                    Fullstack Developer based in Brazil
                </Typography>
                {renderButtons()}
            </div>
        );
    }

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
