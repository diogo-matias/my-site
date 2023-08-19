import { Grid, Typography, useTheme } from "@mui/material";
import { SwitchThemeInput } from "../switchThemeInput";
import { STYLES, createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";
import { scrollTo, scrollToWithPadding } from "@hooks/scroll";
import useWindowDimensions from "@hooks/windowDimentions";
import { FaBars } from "react-icons/fa";
import { MobileMenuModal } from "components/modals/mobileMenuModal";
import { useState } from "react";

export function Header() {
    const { width } = useWindowDimensions();

    const theme = useTheme();
    const styles = createStyle(theme);

    const [openMobileModal, setOpenMobileModal] = useState(false);

    const links = [
        {
            label: "About",
            scrollTo: SECTIONS.ABOUT,
        },
        {
            label: "Projects",
            scrollTo: SECTIONS.PROJECTS,
        },
        {
            label: "Contact",
            scrollTo: SECTIONS.CONTACT,
        },
    ];

    function handleMobileModalClose() {
        setOpenMobileModal(false);
    }

    function handleNavigation(elementId: string) {
        let shouldUsePadding: boolean;

        switch (elementId) {
            case SECTIONS.PROJECTS:
                shouldUsePadding = true;
                break;
            case SECTIONS.CONTACT:
                shouldUsePadding = true;
                break;
            default:
                shouldUsePadding = false;
                break;
        }

        const padding = shouldUsePadding ? STYLES.HEADER_HEIGHT : 0;

        scrollToWithPadding(elementId, padding);
    }

    function renderButtons() {
        const breakpoint = width < theme.breakpoints.values.sm;

        if (!breakpoint) {
            return links.map((link, index) => {
                return (
                    <Typography
                        onClick={() => handleNavigation(link.scrollTo)}
                        key={`${link.scrollTo}-${index}`}
                        sx={styles.links}
                    >
                        {link.label}
                    </Typography>
                );
            });
        }
    }

    function renderMobileOrDesktopButton() {
        const breakpoint = width < theme.breakpoints.values.sm;

        if (breakpoint) {
            return (
                <div
                    style={styles.mobileButtonContainer}
                    onClick={() => setOpenMobileModal(true)}
                >
                    <FaBars size={25} />
                </div>
            );
        }

        return <SwitchThemeInput />;
    }

    return (
        <div>
            <MobileMenuModal
                links={links}
                onClose={handleMobileModalClose}
                open={openMobileModal}
            />
            <Grid container sx={styles.container}>
                <Grid item xs={8} sm={4}>
                    <Typography
                        sx={styles.links}
                        onClick={() => handleNavigation(SECTIONS.PRESENTATION)}
                    >
                        Diogo <span style={styles.span}>Macedo</span>
                    </Typography>
                </Grid>
                <Grid item xs={0} sm={4} sx={{ ...styles.linkContainer }}>
                    {renderButtons()}
                </Grid>
                <Grid item xs={4} sm={4} sx={styles.buttonsContainer}>
                    {renderMobileOrDesktopButton()}
                </Grid>
            </Grid>
        </div>
    );
}
