import { Grid, Typography, useTheme } from "@mui/material";
import { createStyle } from "./styles";

export function Contact() {
    const theme = useTheme();
    const styles = createStyle(theme);

    function renderTitle() {
        return (
            <Grid container sx={styles.titleContainer}>
                <Typography variant="h3" fontWeight={600}>
                    Contact
                </Typography>
                <div style={styles.divider} />
            </Grid>
        );
    }

    function renderContent() {
        return <div>sasd</div>;
    }

    return (
        <div style={styles.container}>
            {renderTitle()}
            {renderContent()}
        </div>
    );
}
