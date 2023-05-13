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
            <Grid item xs={5} sm={3} md={4}>
                <div onClick={handleClick}>
                    <Paper
                        elevation={5}
                        sx={[
                            styles.paper,
                            {
                                display: {
                                    xs: "none",
                                    sm: "flex",
                                },
                            },
                        ]}
                    >
                        <img src={logoUrl} style={styles.logo} />
                    </Paper>
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                sm={7}
                md={8}
                sx={{
                    paddingLeft: {
                        xs: 0,
                        sm: 2,
                    },
                }}
            >
                <Typography variant="h5" fontWeight={500} sx={styles.cardTitle}>
                    {name}
                </Typography>
                <Typography>{description}</Typography>
            </Grid>
        </Grid>
    );
}
