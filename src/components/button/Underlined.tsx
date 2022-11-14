import { alpha, Button, ButtonBaseProps, styled } from "@mui/material";

interface ButtonProps extends ButtonBaseProps {
    active?: boolean;
}

const Underlined = styled(Button, {
    shouldForwardProp: (props) => props !== "active"
})<ButtonProps>(({ theme, active }) => ({
    borderBottom: `1px solid ${active ? theme.palette.primary.main : theme.palette.divider}`,
    borderRadius: 0,
    transition: theme.transitions.create(["border", "background"], {
        duration: theme.transitions.duration.complex
    }),
    paddingTop: theme.spacing(1.6),
    paddingBottom: theme.spacing(1.6),
    justifyContent: "start",
    textTransform: "none",
    ":hover": {
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        background: alpha(theme.palette.primary.main, 0.2)
    }
}));

export default Underlined;
