import { Box, Button, Toolbar } from "@mui/material";
import { useState } from "react";
import { BlogAppBar } from "../components/appbar";
import BlogLayout from "../layouts/BlogLayout";

export default function Home(): JSX.Element {
    return (
        <>
            <BlogAppBar>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box>
                        <Button variant="outlined" sx={{ mr: 1 }}>
                            Home
                        </Button>
                        <Button variant="outlined" sx={{ mr: 1 }}>
                            Portfolio
                        </Button>
                        <Button variant="outlined" sx={{ mr: 1 }}>
                            Blog
                        </Button>
                        <Button variant="outlined" sx={{ mr: 1 }}>
                            About Me
                        </Button>
                    </Box>
                    <Box>
                        <Button variant="contained">:)</Button>
                    </Box>
                </Box>
            </BlogAppBar>
            <Toolbar sx={{ my: 1 }} />
            <BlogLayout>
                <Box sx={{ height: "100vh" }}>
                    <h1>halo</h1>
                </Box>
            </BlogLayout>
        </>
    );
}
