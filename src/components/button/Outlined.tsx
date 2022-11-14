import { alpha, ButtonBaseProps } from "@mui/material";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface ButtonProps extends ButtonBaseProps {
    active?: boolean;
}

const Outlined = styled(MuiButton, {
    shouldForwardProp: (props) => props !== "active"
})<ButtonProps>(({ theme, active }) => ({
    background: alpha(theme.palette.primary.main, active ? 0.1 : 0),
    border: `1px solid ${active ? theme.palette.primary.main : "transparent"}`,
    color: active ? theme.palette.primary.dark : theme.palette.text.primary,
    borderRadius: "0px",
    transition: theme.transitions.create(["background", "border", "color"], {
        duration: theme.transitions.duration.complex
    }),
    textTransform: "none",
    ":hover": {
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.dark,
        background: alpha(theme.palette.primary.main, 0.1)
    }
}));

export default Outlined;
