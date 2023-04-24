import { Typography, useTheme } from "@mui/material";
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
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${imageUrl})`,
        ...containerHoverStyle,
      }}
      onMouseEnter={() => setContainerHover(true)}
      onMouseLeave={() => setContainerHover(false)}
      onClick={handleClick}
    >
      <div style={{ ...styles.titleContainer, ...titleContainerHoverStyle }}>
        <Typography fontWeight={200}>{title}</Typography>
      </div>
    </div>
  );
}
