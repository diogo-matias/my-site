import { Grid, Typography, useTheme } from "@mui/material";
import { hexToRGBA } from "../../utils/colors";
import { SwitchThemeInput } from "../switchThemeInput";
import { createStyle } from "./styles";

export function Header() {
    const theme = useTheme();
    const styles = createStyle(theme);

    const links = [
        {
            label: "About",
        },
        {
            label: "Projects",
        },
        {
            label: "Technologies",
        },
    ];

    return (
        <Grid container sx={styles.container}>
            <Grid item xs={4} />
            <Grid item xs={4} sx={{ ...styles.linkContainer }}>
                {links.map((link) => {
                    return (
                        <Typography sx={styles.links}>{link.label}</Typography>
                    );
                })}
            </Grid>
            <Grid item xs={4} sx={styles.buttonsContainer}>
                <SwitchThemeInput />
            </Grid>
        </Grid>
    );
}
