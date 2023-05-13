import { Button, styled } from "@mui/material";

export function MyButton(props: any) {
    const { children } = props;

    const CustomButton = styled(Button)({
        borderRadius: 20,
    });

    return <CustomButton {...props}>{children}</CustomButton>;
}
