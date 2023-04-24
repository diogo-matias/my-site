import { Grid, Typography, useTheme } from "@mui/material";
import { createStyle } from "./styles";

export function About(): React.ReactElement {
  const theme = useTheme();
  const styles = createStyle(theme);

  function renderTitle() {
    return (
      <Grid item xs={12} sx={styles.titleContainer}>
        <Typography variant="h2" fontWeight={600}>
          <span style={styles.titleSpan}>About</span> me
        </Typography>
      </Grid>
    );
  }

  function renderText() {
    return (
      <Grid item xs={6}>
        <Typography fontWeight={200}>
          i'm a fulltack developer based on Brasil
        </Typography>
      </Grid>
    );
  }

  return (
    <div style={styles.container}>
      <Grid container>
        {renderTitle()}
        {renderText()}
      </Grid>
    </div>
  );
}
