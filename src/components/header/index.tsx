import { Grid, Typography, useTheme } from "@mui/material";
import { hexToRGBA } from "../../utils/colors";
import { SwitchThemeInput } from "../switchThemeInput";
import { createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";
import { scrollTo } from "@hooks/scroll";

export function Header() {
    const theme = useTheme();
    const styles = createStyle(theme);

    const links = [
        {
            label: "About",
            scrollTo: SECTIONS.ABOUT,
        },
        {
            label: "Projects",
            scrollTo: SECTIONS.PROJECTS,
        },
        {
            label: "Presentation",
            scrollTo: SECTIONS.PRESENTATION,
        },
        {
            label: "Testing",
            scrollTo: SECTIONS.ABOUT,
        },
    ];

    function handleNavigation(elementId: string) {
        scrollTo(elementId);
    }

    return (
        <Grid container sx={styles.container}>
            <Grid item xs={4}>
                <Typography sx={styles.links}>
                    <div
                        onClick={() => handleNavigation(SECTIONS.PRESENTATION)}
                    >
                        Diogo <span style={styles.span}>Macedo</span>
                    </div>
                </Typography>
            </Grid>
            <Grid item xs={4} sx={{ ...styles.linkContainer }}>
                {links.map((link) => {
                    return (
                        <Typography sx={styles.links}>
                            <div
                                onClick={() => handleNavigation(link.scrollTo)}
                            >
                                {link.label}
                            </div>
                        </Typography>
                    );
                })}
            </Grid>
            <Grid item xs={4} sx={styles.buttonsContainer}>
                <SwitchThemeInput />
            </Grid>
        </Grid>
    );
}
