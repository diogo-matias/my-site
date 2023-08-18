import { Typography } from "@mui/material";

export function BaseTextarea(
    props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
        hasError?: boolean;
        errorMessage?: string;
    }
) {
    const { style, hasError, errorMessage, children, ...otherProps } = props;

    const baseStyle: React.CSSProperties = {
        width: "100%",
        paddingInline: 15,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 20,
        border: "none",
        outline: "none",
        fontFamily: "arial",
        resize: "none",
    };

    function renderErrorMessage() {
        if (hasError) {
            return errorMessage;
        }
    }

    return (
        <div style={{ position: "relative" }}>
            <textarea {...otherProps} style={{ ...baseStyle, ...style }}>
                {children}
            </textarea>
            <Typography
                sx={{ fontSize: 12, marginLeft: 2, position: "absolute" }}
            >
                {renderErrorMessage()}
            </Typography>
        </div>
    );
}
