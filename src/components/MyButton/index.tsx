import { Button, styled } from "@mui/material";

export function MyButton() {
    const CustomButton = styled(Button)({
        borderRadius: 20,
    });

    return CustomButton;
}
