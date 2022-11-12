import { Settings } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
    Box,
    CssBaseline,
    ListItemIcon,
    Menu,
    MenuItem,
    ThemeProvider,
    Toolbar
} from "@mui/material";
import { lightBlue, teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { toggleTheme } from "../app/themeSlice";
import { BlogAppBar } from "../components/appbar";
import { IconButton, OutlinedButton } from "../components/button";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import useThemeDetector from "../hooks/useThemeDetector";
import BlogLayout from "../layouts/BlogLayout";

export default function HomeLayout(): JSX.Element {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const systemTheme = useThemeDetector();
    const location = useLocation();

    const theme = useAppSelector((state) => state.theme.theme);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(
        theme == "system" ? (systemTheme == "dark" ? true : false) : theme == "dark" ? true : false
    );
    const openMenu = Boolean(anchorEl);
    function handleChangeTheme(theme: "dark" | "light" | "system") {
        dispatch(toggleTheme({ theme }));
        if (theme == "dark") {
            setIsDarkMode(true);
        } else if (theme == "light") {
            setIsDarkMode(false);
        } else {
            setIsDarkMode(systemTheme == "dark" ? true : false);
        }
    }
    function handleShowTheme(evt: React.MouseEvent<HTMLElement>) {
        setAnchorEl(evt.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }
    const initTheme = createTheme({
        palette: {
            primary: {
                main: lightBlue[300]
            },
            mode: isDarkMode ? "dark" : "light"
        }
    });
    return (
        <ThemeProvider theme={initTheme}>
            <CssBaseline enableColorScheme />
            <React.Fragment>
                <BlogAppBar>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <OutlinedButton
                                sx={{ mr: 1 }}
                                onClick={() => navigate("/")}
                                active={location.pathname == "/"}>
                                Home
                            </OutlinedButton>
                            <OutlinedButton
                                sx={{ mr: 1 }}
                                onClick={() => navigate("portfolio")}
                                active={location.pathname == "/portfolio"}>
                                Portfolio
                            </OutlinedButton>
                            <OutlinedButton
                                onClick={() => navigate("blog")}
                                sx={{ mr: 1 }}
                                active={location.pathname == "/blog"}>
                                Blog
                            </OutlinedButton>
                            <OutlinedButton
                                onClick={() => navigate("about")}
                                sx={{ mr: 1 }}
                                active={location.pathname == "/about"}>
                                About Me
                            </OutlinedButton>
                        </Box>
                        <Box>
                            <IconButton
                                onClick={handleShowTheme}
                                aria-controls={openMenu ? "account-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={openMenu ? "true" : undefined}>
                                {theme == "system" ? (
                                    <Settings />
                                ) : theme == "dark" ? (
                                    <DarkModeIcon />
                                ) : (
                                    <LightModeIcon />
                                )}
                            </IconButton>
                        </Box>
                    </Box>
                </BlogAppBar>
                <Toolbar sx={{ my: 1 }} />
                <BlogLayout>
                    <Outlet />
                </BlogLayout>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openMenu}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.12))",
                            mt: 1.5,
                            // background:
                            "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1
                            },
                            "&:before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0
                            }
                        }
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                    <MenuItem onClick={() => handleChangeTheme("dark")}>
                        <ListItemIcon>
                            <DarkModeIcon fontSize="small" />
                        </ListItemIcon>
                        Dark Mode
                    </MenuItem>
                    <MenuItem onClick={() => handleChangeTheme("light")}>
                        <ListItemIcon>
                            <LightModeIcon fontSize="small" />
                        </ListItemIcon>
                        Light Mode
                    </MenuItem>
                    <MenuItem onClick={() => handleChangeTheme("system")}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        System Setting
                    </MenuItem>
                </Menu>
            </React.Fragment>
        </ThemeProvider>
    );
}
