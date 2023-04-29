import { Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { Dog3D, MyButton } from "@components";
import { useAppDispatch } from "@hooks/redux";
import { toggleThemeMode } from "@store/modules/theme";
import { createStyle } from "./styles";

export default function Presentation(): React.ReactElement {
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const styles = createStyle(theme);

    function handleClick() {
        document.getElementById("projectsContainer")?.scrollIntoView({
            behavior: "smooth",
        });
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
        return <Dog3D />;
    }

    return (
        <div style={styles.container}>
            {renderTitle()}
            {render3d()}
        </div>
    );
}
