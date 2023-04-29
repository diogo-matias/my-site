import { Grid, Typography, useTheme } from "@mui/material";
import { Card } from "@components";
import { CardPropsType } from "components/card/types";
import { createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";

export function Projects(): React.ReactElement {
    const theme = useTheme();
    const styles = createStyle(theme);

    const cardsInfo: CardPropsType[] = [
        {
            imageUrl:
                "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f994eb88114647.5dcc606cd9bda.png",
            redirectLink: "https://www.youtube.com",
            title: "Sistema de Recados",
        },
        {
            imageUrl:
                "https://www.tailorbrands.com/wp-content/uploads/2021/06/Header-Types-of-logos.jpg",
            redirectLink: "",
            title: "Projeto 2",
        },
        {
            imageUrl:
                "https://goodmockups.com/wp-content/uploads/2017/05/Free-Respnsive-Website-Mockup-PSD.jpg",
            redirectLink: "",
            title: "Projeto 3",
        },
        {
            imageUrl:
                "https://www.tailorbrands.com/wp-content/uploads/2021/06/Header-Types-of-logos.jpg",
            redirectLink: "https://www.youtube.com",
            title: "Sistema de Recados",
        },
        {
            imageUrl:
                "https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg",
            redirectLink: "",
            title: "Projeto 2",
        },
        {
            imageUrl:
                "https://goodmockups.com/wp-content/uploads/2017/05/Free-Respnsive-Website-Mockup-PSD.jpg",
            redirectLink: "",
            title: "Projeto 3",
        },
    ];

    function renderTitle() {
        return (
            <Grid container sx={styles.titleContainer}>
                <Typography variant="h2" fontWeight={600}>
                    My <span style={styles.titleSpan}>Projects</span>
                </Typography>
            </Grid>
        );
    }

    function renderCards() {
        return (
            <Grid container spacing={5}>
                {cardsInfo.map((item) => (
                    <Grid item xs={12} sm={6} md={4} sx={styles.cardContainer}>
                        <Card
                            imageUrl={item.imageUrl}
                            title={item.title}
                            redirectLink={item.redirectLink}
                        />
                    </Grid>
                ))}
            </Grid>
        );
    }

    return (
        <div style={styles.container} id={SECTIONS.PROJECTS}>
            {renderTitle()}
            {renderCards()}
        </div>
    );
}
