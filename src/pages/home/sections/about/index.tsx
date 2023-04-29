import { Grid, Paper, Typography, useTheme } from "@mui/material";
import { ExperienceCard } from "../../../../components";
import { Earth3d } from "../../../../components/threejs/earth";
import { createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";

export function About(): React.ReactElement {
    const theme = useTheme();
    const styles = createStyle(theme);

    const companies = [
        {
            name: "Growdev",
            description: `Lorem ipsum dolor, sipisicing elit. Reiciendis, neque rerum aut commodi mollitia cum dio! Temporibus, sint?`,
            link: "https://growdev.com.br",
            logoUrl: "/images/growdev.png",
        },
        {
            name: "Arezzo",
            description: `Lorem ipsum dolor, sipisicing elit. Reiciendis, neque rerum aut commodi mollitia cum dio! Temporibus, sint?`,
            link: "https://arezzo.com.br",
            logoUrl: "/images/arezzo.png",
        },
    ];

    function renderTitle() {
        return (
            <Grid item xs={12}>
                <Typography sx={styles.title} variant="h2" fontWeight={600}>
                    <span style={styles.titleSpan}>About</span> me
                </Typography>
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
                {companies.map((item) => {
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

    function render3dModel() {
        return <Earth3d />;
    }

    return (
        <div style={styles.container} id={SECTIONS.ABOUT}>
            <Grid container>
                <Grid item xs={6}>
                    {renderTitle()}
                    {renderCards()}
                </Grid>
                {/* <Grid xs={6}>{render3dModel()}</Grid> */}
            </Grid>
        </div>
    );
}
