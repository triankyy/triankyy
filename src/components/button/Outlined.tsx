/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonBaseProps } from "@mui/material";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface ButtonProps extends ButtonBaseProps {
    active?: boolean;
}

const Outlined = styled(MuiButton, {
    shouldForwardProp: (props) => props !== "active"
})<ButtonProps>(({ theme, active }) => ({
    background: "transparent",
    border: active ? `1px solid ${theme.palette.primary.main}` : "none",
    borderRadius: "0px"
}));

export default Outlined;
