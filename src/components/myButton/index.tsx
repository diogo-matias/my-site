import { Button, ButtonProps, styled } from "@mui/material";

export function MyButton(props: ButtonProps) {
    const { children } = props;

    const CustomButton = styled(Button)({
        borderRadius: 20,
    });

    return <CustomButton {...props}>{children}</CustomButton>;
}
