import { Typography, useTheme } from "@mui/material";
import { Badge } from "./types";
import { useEffect, useState } from "react";
import useWindowDimensions from "@hooks/windowDimentions";
import { RGBAToHex, getRandomColor, hexToRGBA } from "utils/colors";
import { CustomCard, CustomImg } from "./styles";
import { CARDS_INFO } from "@constants/projects";

export function ProjectCard() {
    const data = CARDS_INFO;

    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";
    const [cardHover, setCardHover] = useState(false);

    const breakpoints = theme.breakpoints.values;

    const { width } = useWindowDimensions();

    function renderBadges(pattern1: boolean, badges: Badge[]) {
        if (width < breakpoints.sm) {
            return null;
        }

        return (
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)",
                }}
            >
                <div
                    style={{
                        gridColumnEnd: pattern1 ? -1 : 10,
                        gridColumnStart: pattern1 ? 3 : 1,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: pattern1 ? "flex-end" : "flex-start",
                        gap: 10,
                    }}
                >
                    {badges.map((item) => {
                        const { logo, text, color, logoColor } = item;

                        const randomColor = getRandomColor();
                        const formattedRandomColor = randomColor.split("#")[1];
                        const contrast =
                            theme.palette.getContrastText(randomColor);
                        const contrastColor = RGBAToHex(contrast).split("#")[1];

                        return (
                            <img
                                src={`https://img.shields.io/badge/${text}-${
                                    color ?? formattedRandomColor
                                }?style=for-the-badge&logo=${logo}&logoColor=${
                                    logoColor ?? contrastColor
                                }`}
                                height={20}
                                alt="technology-logo"
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

    function renderPatter1() {
        return data.map((item, index) => {
            const pattern1 = index % 2 === 0;

            const Card = CustomCard(pattern1);

            return (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(12, 1fr)",
                        gap: "10px",
                        position: "relative",
                        marginBottom: "10vh",
                    }}
                >
                    <Card>
                        <a
                            href={item.redirectLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <CustomImg
                                src={item.imageUrl}
                                alt="project-thumb"
                            />
                        </a>
                    </Card>

                    <div
                        style={{
                            position: "relative",
                            zIndex: 2,
                            gridColumnEnd: pattern1 ? -1 : 7,
                            gridColumnStart: pattern1 ? 7 : 1,
                            gridRowStart: 1,
                            gridRowEnd: -1,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                height: "100%",
                                flexDirection: "column",
                                alignItems: pattern1
                                    ? "flex-end"
                                    : "flex-start",
                                gap: "5%",
                            }}
                        >
                            <div
                                style={{
                                    textAlign: pattern1 ? "end" : "start",
                                }}
                            >
                                <Typography color="primary">
                                    Featured project
                                </Typography>
                                <Typography variant="h4" fontWeight={600}>
                                    Sistema de Recados
                                </Typography>
                            </div>
                            <div
                                style={{
                                    backgroundColor: hexToRGBA(
                                        theme.palette.background.paper,
                                        0.5
                                    ),
                                    padding: 15,
                                    borderRadius: 10,
                                    backdropFilter: "blur(50px)",
                                    boxShadow: `0px 0px 20px ${hexToRGBA(
                                        "#000000",
                                        0.3
                                    )}`,
                                }}
                            >
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt dolorum, ipsam et
                                    vel sed facilis a alias, blanditiis
                                    laboriosam quasi molestiae laborum quaerat
                                    excepturi! Voluptas facilis unde aspernatur
                                    sit saepe.
                                </Typography>
                            </div>
                            {renderBadges(pattern1, item.badges)}
                            <div
                                style={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    filter: `grayscale(1) invert(${
                                        isDarkMode ? 1 : 0
                                    })`,
                                }}
                            >
                                <a
                                    href={item.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                        }}
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                                        alt="github-logo"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return <div>{renderPatter1()}</div>;
}
