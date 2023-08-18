import { Typography } from "@mui/material";
import React from "react";

export function BaseInput(
    props: React.InputHTMLAttributes<HTMLInputElement> & {
        errorMessage?: string;
        hasError?: boolean;
    }
) {
    const {
        style,
        errorMessage,
        hasError = false,
        type = "text",
        ...otherProps
    } = props;

    const baseStyle: React.CSSProperties = {
        width: "100%",
        paddingInline: 15,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 24,
        border: "none",
        outline: "none",
    };

    function renderErrorMessage() {
        if (hasError) {
            return errorMessage;
        }
    }

    return (
        <div style={{ position: "relative" }}>
            <input
                {...otherProps}
                type={type}
                style={{
                    ...baseStyle,
                    ...style,
                }}
            />
            <Typography
                sx={{ fontSize: 12, marginLeft: 2, position: "absolute" }}
            >
                {renderErrorMessage()}
            </Typography>
        </div>
    );
}
