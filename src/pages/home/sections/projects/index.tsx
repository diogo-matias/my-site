import { Typography, useTheme } from "@mui/material";
import { Card } from "../../../../components/card";
import { CardPropsType } from "../../../../components/card/types";
import { createStyle } from "./styles";

export function Projects(): React.ReactElement {
    const theme = useTheme();
    const styles = createStyle(theme);

    const cardsInfo: CardPropsType[] = [
        {
            imageUrl:
                "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f994eb88114647.5dcc606cd9bda.png",
            redirectLink: "",
            title: "Projeto 1",
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
            <Typography variant="h2" fontWeight={600}>
                My <span style={styles.titleSpan}>Projects</span>
            </Typography>
        );
    }

    function renderCards() {
        return (
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: 50,
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                {cardsInfo.map((item) => (
                    <Card
                        imageUrl={item.imageUrl}
                        title={item.title}
                        redirectLink={item.redirectLink}
                    />
                ))}
            </div>
        );
    }

    return (
        <div style={styles.container}>
            {renderTitle()}
            {renderCards()}
        </div>
    );
}