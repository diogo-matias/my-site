import { Typography, useTheme } from "@mui/material";
import { CardPropsType } from "./types";
import { createStyle } from "./styles";

export function Card(props: CardPropsType): React.ReactElement {
    const { imageUrl, redirectLink, title } = props;

    const theme = useTheme();
    const styles = createStyle(theme);

    return (
        <div
            style={{ ...styles.container, backgroundImage: `url(${imageUrl})` }}
        >
            <div style={styles.titleContainer}>
                <Typography fontWeight={200}>{title}</Typography>
            </div>
        </div>
    );
}
