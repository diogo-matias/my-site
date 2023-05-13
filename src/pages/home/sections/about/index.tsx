import { Grid, Paper, Typography, useTheme } from "@mui/material";
import { ExperienceCard, TechCanvas } from "@components";
import { MyButton } from "components/myButton";
import { createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";
import { COMPANIES } from "@constants/companies";

export function About(): React.ReactElement {
    const theme = useTheme();
    const styles = createStyle(theme);

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
                    Sou desenvolvedor web fullstack localizado no Brasil.
                    Apaixonado por programação e lógica. Amo desafios e gosto de
                    estar sempre aprendendo algo novo.
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
                {COMPANIES.map((item) => {
                    return (
                        <ExperienceCard
                            name={item.name}
                            description={item.description}
                            link={item.link}
                            logoUrl={item.logoUrl}
                        />
                    );
                })}
            </div>
        );
    }

    return (
        <div style={styles.container} id={SECTIONS.ABOUT}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    {renderTitle()}
                    {renderCards()}
                </Grid>
                <Grid item xs={12} md={6} style={styles.tagsContainer}>
                    <TechCanvas />
                </Grid>
            </Grid>
        </div>
    );
}
