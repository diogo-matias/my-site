import { Button, Grid, Typography, useTheme } from "@mui/material";
import { SwitchThemeInput } from "../switchThemeInput";
import { STYLES, createStyle } from "./styles";
import { SECTIONS } from "@constants/sections";
import { scrollToWithPadding } from "@hooks/scroll";
import useWindowDimensions from "@hooks/windowDimentions";
import { FaBars } from "react-icons/fa";
import { MobileMenuModal } from "components/modals/mobileMenuModal";
import { useState } from "react";
import { STRINGS } from "language";
import { useDispatch } from "react-redux";
import { LanguageActions } from "@store/modules/language";
import { LANGUAGES } from "@constants/language";
import { FaLanguage } from "react-icons/fa6";
import { LanguageSelection } from "components/modals/languageSelectionModal";

export function Header() {
    const { width } = useWindowDimensions();

    const theme = useTheme();
    const styles = createStyle(theme);
    const dispatch = useDispatch();

    const [openMobileModal, setOpenMobileModal] = useState(false);
    const [openLanguageModal, setOpenLanguageModal] = useState(false);

    const menuItems = [
        {
            label: STRINGS.HEADER.ABOUT,
            scrollTo: SECTIONS.ABOUT,
        },
        {
            label: STRINGS.HEADER.PROJECTS,
            scrollTo: SECTIONS.PROJECTS,
        },
        {
            label: STRINGS.HEADER.CONTACT,
            scrollTo: SECTIONS.CONTACT,
        },
    ];

    function handleLanguageSelection() {
        setOpenLanguageModal(true);

        setOpenMobileModal(false);
    }

    function handleMobileModalClose() {
        setOpenMobileModal(false);
    }
    function handleLanguageModalClose() {
        setOpenLanguageModal(false);
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
            return menuItems.map((link, index) => {
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

        return (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FaLanguage
                    onClick={handleLanguageSelection}
                    size="40px"
                    style={{ cursor: "pointer" }}
                />
                <SwitchThemeInput />
            </div>
        );
    }

    return (
        <div>
            <MobileMenuModal
                handleLanguageSelection={handleLanguageSelection}
                links={menuItems}
                onClose={handleMobileModalClose}
                open={openMobileModal}
            />
            <LanguageSelection
                onClose={handleLanguageModalClose}
                open={openLanguageModal}
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
