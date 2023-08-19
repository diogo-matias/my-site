import { Grid, Paper, Typography, useTheme } from "@mui/material";
import { ExperienceCard, TechCanvas } from "@components";
import { MyButton } from "components/myButton";
import { createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";
import { COMPANIES } from "@constants/companies";
import useWindowDimensions from "@hooks/windowDimentions";

export function About(): React.ReactElement {
    const theme = useTheme();
    const styles = createStyle(theme);
    const { width } = useWindowDimensions();

    function renderTitle() {
        return (
            <Grid item xs={12}>
                <div style={styles.titleContainer}>
                    <Typography variant="h3" fontWeight={600}>
                        <span style={styles.titleSpan}>About</span> me
                    </Typography>
                    <div style={styles.divider} />
                </div>
                <Typography fontWeight={200}>
                    I'm a Brazilian-based fullstack web developer with a fervent
                    passion for programming and logical problem-solving. I find
                    my stride in facing challenges head-on and am perpetually
                    driven to acquire fresh knowledge and skills.
                </Typography>
                <Typography sx={styles.experienceTitle} variant="h4">
                    Experience
                </Typography>
            </Grid>
        );
    }

    function renderCards() {
        return (
            <div style={styles.cardsContainer}>
                {COMPANIES.map((item, index) => {
                    return (
                        <ExperienceCard
                            name={item.name}
                            description={item.description}
                            link={item.link}
                            logoUrl={item.logoUrl}
                            key={`${item.name}-${index}`}
                        />
                    );
                })}
            </div>
        );
    }

    function renderTechCanvas() {
        const breakpoint = width < theme.breakpoints.values.md;

        if (!breakpoint) {
            return <TechCanvas />;
        }
    }

    return (
        <div style={styles.container} id={SECTIONS.ABOUT}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    {renderTitle()}
                    {renderCards()}
                </Grid>
                <Grid item xs={0} md={6} style={styles.tagsContainer}>
                    {renderTechCanvas()}
                </Grid>
            </Grid>
        </div>
    );
}
