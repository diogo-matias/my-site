import React from "react";
import { styles } from "./styles";

export function Wrapper(
    props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
) {
    const { children, style } = props;

    return (
        <div style={{ ...styles.wrapper, ...style }} {...props}>
            {children}
        </div>
    );
}
