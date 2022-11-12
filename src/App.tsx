import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AboutPage from "./pages/About";
import BlogPage from "./pages/blog";
import BlogSlugPage from "./pages/blog/slug";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import VitePage from "./pages/Vite";

export default function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/vite" element={<VitePage />} />
            <Route path="/" element={<HomeLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="portfolio" element={<PortfolioPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog/:slug" element={<BlogSlugPage />} />
                <Route path="about" element={<AboutPage />} />
            </Route>
        </Routes>
    );
}
