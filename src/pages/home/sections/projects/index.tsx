import { Grid, Typography, useTheme } from "@mui/material";
import { createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";
import { ProjectCard } from "@components";

export function Projects(): React.ReactElement {
    const theme = useTheme();
    const styles = createStyle(theme);

    function renderTitle() {
        return (
            <Grid container sx={styles.titleContainer}>
                <Typography variant="h3" fontWeight={600}>
                    Some <span style={styles.titleSpan}>projects</span>{" "}
                </Typography>
                <div style={styles.divider} />
            </Grid>
        );
    }

    return (
        <div style={styles.container} id={SECTIONS.PROJECTS}>
            {renderTitle()}
            <ProjectCard />
        </div>
    );
}
