import {
    AppBar as MuiAppBar,
    AppBarProps as MuiAppBarProps,
    Container,
    Toolbar
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";

interface AppBarProps extends MuiAppBarProps {
    isScrolled?: boolean;
}

interface Props {
    children?: JSX.Element | JSX.Element[];
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "isScrolled"
})<AppBarProps>(({ theme, isScrolled }) => ({
    background: alpha(theme.palette.background.default, 0.5),
    color: theme.palette.text.primary,
    borderBottom: isScrolled ? `1px solid ${theme.palette.divider}` : "none",
    boxShadow: "none",
    backdropFilter: "blur(10px)"
}));

export default function CustomBlogAppBar({ children }: Props) {
    const [scrolled, setScrolled] = useState<boolean>(false);
    function handleScroll(): void {
        if (window.scrollY >= 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    window.addEventListener("scroll", handleScroll);
    return (
        <AppBar isScrolled={scrolled}>
            <Toolbar>
                <Container maxWidth="md">{children}</Container>
            </Toolbar>
        </AppBar>
    );
}
