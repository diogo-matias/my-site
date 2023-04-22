import { Typography, useTheme } from "@mui/material";
import { styles } from "./styles";

export function Header() {
    const { palette } = useTheme();
    // const backgroundColor = palette.primary.dark;
    const backgroundColor = "";

    const links = [
        {
            label: "About",
        },
        {
            label: "Projects",
        },
    ];

    return (
        <div style={{ ...styles.container, backgroundColor }}>
            {links.map((link) => {
                return <Typography sx={styles.links}>{link.label}</Typography>;
            })}
        </div>
    );
}
