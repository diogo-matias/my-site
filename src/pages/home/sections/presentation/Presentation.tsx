import { Button, Typography, useTheme } from "@mui/material";
import React from "react";

import { Man3d } from "@components";
import { MyButton } from "components/MyButton";

import { useAppDispatch } from "@hooks/redux";
import { toggleThemeMode } from "@store/modules/theme";
import { createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";
import { scrollTo } from "@hooks/scroll";

export default function Presentation(): React.ReactElement {
    const theme = useTheme();
    const styles = createStyle(theme);

    function handleClick() {
        scrollTo(SECTIONS.PROJECTS);
    }

    function renderButtons() {
        return (
            <div style={styles.buttonsContainer}>
                <MyButton variant="contained" onClick={handleClick}>
                    Projects
                </MyButton>
            </div>
        );
    }

    function renderTitle() {
        return (
            <div style={styles.titleContainer}>
                <Typography style={styles.title} variant="h2" fontWeight={600}>
                    Hi there, i'm <span style={styles.titleSpan}>Diogo</span>
                </Typography>
                <Typography variant="h5" fontWeight={100}>
                    Fullstack Developer based in Brazil
                </Typography>
                {renderButtons()}
            </div>
        );
    }

    function render3d() {
        return <Man3d />;
    }

    return (
        <div style={styles.container} id={SECTIONS.PRESENTATION}>
            {renderTitle()}
            {render3d()}
        </div>
    );
}
