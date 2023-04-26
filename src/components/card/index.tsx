import { Paper, Typography, useTheme } from "@mui/material";
import { CardPropsType } from "./types";
import { createStyle } from "./styles";
import { useState } from "react";

export function Card(props: CardPropsType): React.ReactElement {
    const { imageUrl, redirectLink, title } = props;

    const theme = useTheme();
    const styles = createStyle(theme);

    const [containerHover, setContainerHover] = useState(false);

    const containerHoverStyle = containerHover ? styles.hoverContainer : {};
    const titleContainerHoverStyle = containerHover
        ? styles.titleContainerHover
        : {};

    function handleClick() {
        if (!redirectLink) {
            return;
        }

        window.open(redirectLink, "_blank");
    }

    return (
        <Paper
            elevation={5}
            sx={{
                ...styles.container,
                ...containerHoverStyle,
            }}
            onMouseEnter={() => setContainerHover(true)}
            onMouseLeave={() => setContainerHover(false)}
            onClick={handleClick}
        >
            <img
                src={imageUrl}
                style={styles.backgroundImage}
                alt="project_image"
            />
            <div
                style={{
                    ...styles.titleContainer,
                    ...titleContainerHoverStyle,
                }}
            >
                <Typography sx={styles.title} fontWeight={400} variant="h5">
                    {title}
                </Typography>
                <Typography fontWeight={200}>
                    Projeto de um sistema de recados para armazenar recados
                    obviamente
                </Typography>
            </div>
        </Paper>
    );
}
