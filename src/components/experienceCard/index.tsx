import { Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import { createStyle } from "./styles";
import { ExperienceCardPropsType } from "./types";

export function ExperienceCard(
    props: ExperienceCardPropsType
): React.ReactElement {
    const { logoUrl, description, link, name } = props;

    const theme = useTheme();
    const styles = createStyle(theme);

    function handleClick() {
        window.open(link, "_blank");
    }

    return (
        <Grid item container style={styles.container}>
            <Grid item xs={4}>
                <div onClick={handleClick}>
                    <Paper elevation={5} sx={styles.paper}>
                        <img src={logoUrl} style={styles.logo} />
                    </Paper>
                </div>
            </Grid>
            <Grid
                item
                xs={8}
                style={{
                    paddingLeft: 15,
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight={500}
                    style={styles.cardTitle}
                >
                    {name}
                </Typography>
                <Typography>{description}</Typography>
            </Grid>
        </Grid>
    );
}
