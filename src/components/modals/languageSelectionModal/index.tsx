import { Box, ClickAwayListener, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { hexToRGBA } from "utils/colors";
import { AiOutlineClose } from "react-icons/ai";
import { MobileMenuModalPropsType } from "./types";
import "./style.css";
import { useState } from "react";
import { scrollTo } from "@hooks/scroll";
import { SwitchThemeInput } from "components/switchThemeInput";
import { LANGUAGES } from "@constants/language";
import { useAppDispatch } from "@hooks/redux";
import { LanguageActions } from "@store/modules/language";

export function LanguageSelection(props: MobileMenuModalPropsType) {
    const { onClose, open } = props;

    const theme = useTheme();
    const dispatch = useAppDispatch();

    const [animationDirection, setAnimationDirection] = useState([400, 0]);

    function renderClose() {
        return (
            <div onClick={handleClose}>
                <AiOutlineClose
                    size={30}
                    style={{
                        position: "absolute",
                        right: 15,
                        top: 15,
                        cursor: "pointer",
                    }}
                />
            </div>
        );
    }

    function renderTitle() {
        return (
            <div style={{ paddingTop: 50, paddingBottom: 30 }}>
                <Typography variant="h5" style={{ textAlign: "center" }}>
                    Languages
                </Typography>
            </div>
        );
    }

    function handleClose() {
        setAnimationDirection([0, 400]);

        setTimeout(() => {
            onClose();
            setAnimationDirection([400, 0]);
        }, 200);
    }

    function handleItemClick(item: any) {
        handleClose();

        dispatch(LanguageActions.changeLanguage(item.CODE));
    }

    function renderItems() {
        return (
            <div>
                {Object.values(LANGUAGES).map((item) => {
                    return (
                        <div
                            key={item.CODE}
                            onClick={() => handleItemClick(item)}
                            className="menu-item"
                        >
                            {item.ICON} {item.LABEL}
                        </div>
                    );
                })}
            </div>
        );
    }

    function renderThemeButton() {
        return (
            <div
                style={{
                    position: "absolute",
                    bottom: 15,
                    right: 15,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Typography style={{ fontWeight: 100, marginRight: 10 }}>
                    Toggle Theme
                </Typography>
                <SwitchThemeInput />
            </div>
        );
    }

    function renderContent() {
        if (!open) {
            return null;
        }

        return (
            <ClickAwayListener onClickAway={handleClose}>
                <motion.div
                    animate={{ x: animationDirection }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.2,
                    }}
                    style={{
                        position: "fixed",
                        height: "100vh",
                        width: "300px",
                        backgroundColor: hexToRGBA(
                            theme.palette.background.paper,
                            0.5
                        ),
                        backdropFilter: "blur(10px)",
                        right: 0,
                        top: 0,
                        zIndex: 1000,
                    }}
                >
                    {renderClose()}
                    {renderTitle()}
                    {renderItems()}
                    {renderThemeButton()}
                </motion.div>
            </ClickAwayListener>
        );
    }

    return renderContent();
}
