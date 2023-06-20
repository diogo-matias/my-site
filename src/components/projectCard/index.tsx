import { Breakpoint, Button, Icon, Typography, useTheme } from "@mui/material";
import { Badge } from "./types";
import useWindowDimensions from "@hooks/windowDimentions";
import { RGBAToHex, getRandomColor, hexToRGBA } from "utils/colors";
import { CustomCard, CustomImg } from "./styles";
import { CARDS_INFO } from "@constants/projects";
import { CardPropsType } from "@constants/projects/types";
import { GITHUB } from "@constants/github";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { MyButton } from "components/myButton";

export function ProjectCard() {
    const data = CARDS_INFO;

    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    const breakpoints = theme.breakpoints.values;

    const { width } = useWindowDimensions();

    function getFormattedTextByMaxNumberOfCharacters(text: string) {
        let response = text;
        const maxNumberOfCharacters = 200;

        if (text.length > maxNumberOfCharacters) {
            response = text.slice(0, maxNumberOfCharacters);

            response += "...";
        }

        return response;
    }

    function handleNavigation(link: string) {
        window.open(link, "_black");
    }

    function renderBadges(pattern1: boolean, badges: Badge[]) {
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

    function renderFullCard(item: CardPropsType, index: number) {
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
                        <CustomImg src={item.imageUrl} alt="project-thumb" />
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
                            alignItems: pattern1 ? "flex-end" : "flex-start",
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
                            <Typography variant="h5" fontWeight={600}>
                                {item.title}
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
                            <Typography>{item.description}</Typography>
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
                                        height: "30px",
                                    }}
                                    src={GITHUB.logoUrl}
                                    alt="github-logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function renderMobileCard(item: CardPropsType) {
        if (width >= breakpoints.md) {
            return null;
        }

        let breakpoint: Breakpoint = "md";

        if (width <= breakpoints.sm) {
            breakpoint = "sm";
        }

        const Card = CustomCard(false, breakpoint);

        const description =
            breakpoint === "sm"
                ? getFormattedTextByMaxNumberOfCharacters(item.description)
                : item.description;

        return (
            <div
                style={{
                    marginBottom: "10vh",
                    justifyContent: "center",
                    display: "flex",
                }}
            >
                <Card>
                    <div
                        style={{
                            position: "absolute",
                            zIndex: 1,
                            bottom: 0,
                            top: 0,
                            backgroundColor: hexToRGBA(
                                theme.palette.background.default,
                                0.9
                            ),
                            padding: "10%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5%",
                        }}
                    >
                        <Typography variant="h5" fontWeight={600}>
                            {item.title}
                        </Typography>
                        <Typography>{description}</Typography>
                        {renderBadges(false, item.badges)}
                        <div>
                            <MyButton
                                sx={{ marginTop: "2%" }}
                                size="small"
                                variant="outlined"
                                onClick={() =>
                                    handleNavigation(item.redirectLink ?? "")
                                }
                            >
                                Live demo
                            </MyButton>

                            <div
                                style={{
                                    bottom: 20,
                                    right: 20,
                                    position: "absolute",
                                    display: "flex",
                                    gap: 20,
                                    justifyContent: "flex-end",
                                }}
                            >
                                <a
                                    href={item.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        style={{
                                            height: "25px",
                                            filter: `grayscale(1) invert(${
                                                isDarkMode ? 1 : 0
                                            })`,
                                        }}
                                        src={GITHUB.logoUrl}
                                        alt="github-logo"
                                    />
                                </a>
                                <OpenInNewIcon
                                    color={"primary"}
                                    onClick={() =>
                                        handleNavigation(
                                            item.redirectLink ?? ""
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <CustomImg src={item.imageUrl} alt="project-thumb" />
                </Card>
            </div>
        );
    }

    function renderCards() {
        const isDesktop = width >= breakpoints.md;

        return data.map((item, index) => {
            if (isDesktop) return renderFullCard(item, index);
            return renderMobileCard(item);
        });
    }

    return <div>{renderCards()}</div>;
}
