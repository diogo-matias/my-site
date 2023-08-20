import { Grid, Typography, useTheme } from "@mui/material";
import { createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";
import { ProjectCard } from "@components";
import { STRINGS } from "language";
import { CARDS_INFO } from "@constants/projects";
import { useCallback, useEffect } from "react";

export function Projects(): React.ReactElement {
    const theme = useTheme();
    const styles = createStyle(theme);

    const cardsInfo = CARDS_INFO(STRINGS);

    function renderTitle() {
        return (
            <Grid container sx={styles.titleContainer}>
                <Typography variant="h3" fontWeight={600}>
                    {STRINGS.PROJECTS.TITLE_PART_1}
                    <span style={styles.titleSpan}>
                        {STRINGS.PROJECTS.TITLE_PART_2}
                    </span>
                </Typography>
                <div style={styles.divider} />
            </Grid>
        );
    }

    return (
        <div style={styles.container} id={SECTIONS.PROJECTS}>
            {renderTitle()}
            <ProjectCard cardsInfo={cardsInfo} />
        </div>
    );
}
