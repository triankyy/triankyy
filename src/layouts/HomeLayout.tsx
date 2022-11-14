import { Settings } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
    Box,
    Button,
    CssBaseline,
    CSSObject,
    Drawer,
    ListItemIcon,
    Menu,
    MenuItem,
    styled,
    Theme,
    ThemeProvider,
    Toolbar
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { toggleTheme } from "../app/themeSlice";
import { BlogAppBar } from "../components/appbar";
import { IconButton, OutlinedButton, UnderlinedButton } from "../components/button";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import useThemeDetector from "../hooks/useThemeDetector";
import BlogLayout from "../layouts/BlogLayout";
import MenuIcon from "@mui/icons-material/Menu";

const menu = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "About Me", path: "/about" }
];

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
}));

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
    const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
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
                        <Box
                            sx={{
                                display: { xs: "block", sm: "none" }
                            }}>
                            <OutlinedButton onClick={() => setDrawerOpen(!drawerOpen)} active>
                                <MenuIcon />
                            </OutlinedButton>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", sm: "block" }
                            }}>
                            {menu.map((item) => (
                                <OutlinedButton
                                    key={item.name}
                                    sx={{ mr: 1 }}
                                    onClick={() => navigate(item.path)}
                                    active={location.pathname == item.path}>
                                    {item.name}
                                </OutlinedButton>
                            ))}
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
                <Drawer
                    sx={{
                        // width: drawerWidth,
                        flexShrink: 0,
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            width: "100%",
                            boxSizing: "border-box"
                        }
                    }}
                    variant="persistent"
                    // anchor="left"
                    open={drawerOpen}>
                    <Toolbar />
                    <BlogLayout>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            {menu.map((item) => (
                                <UnderlinedButton
                                    key={item.name}
                                    active={location.pathname == item.path}
                                    onClick={() => navigate(item.path)}>
                                    {item.name}
                                </UnderlinedButton>
                            ))}
                        </Box>
                    </BlogLayout>
                </Drawer>
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
                        elevation: 1,
                        sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.12))",
                            // background: "rgba(255, 255, 255, 0.12)",
                            mt: 1.5,
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
                                bgcolor: isDarkMode ? "#1e1e1e" : "background.paper",
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
