import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { hexToRGBA } from "utils/colors";
import { AiOutlineClose } from "react-icons/ai";
import { MobileMenuModalPropsType } from "./types";
import "./style.css";
import { useState } from "react";
import { scrollTo } from "@hooks/scroll";
import { SwitchThemeInput } from "components/switchThemeInput";

export function MobileMenuModal(props: MobileMenuModalPropsType) {
    const { links, onClose, open } = props;

    const theme = useTheme();

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
                    Menu
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

        scrollTo(item.scrollTo);
    }

    function renderLinks() {
        return (
            <div>
                {links.map((item) => {
                    return (
                        <div
                            onClick={() => handleItemClick(item)}
                            className="menu-item"
                        >
                            {item.label}
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
            <motion.div
                animate={{ x: animationDirection }}
                transition={{
                    ease: "easeOut",
                    duration: 0.2,
                }}
                style={{
                    position: "fixed",
                    height: "100vh",
                    width: "80vw",
                    backgroundColor: hexToRGBA(
                        theme.palette.background.default,
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
                {renderLinks()}
                {renderThemeButton()}
            </motion.div>
        );
    }

    return renderContent();
}
