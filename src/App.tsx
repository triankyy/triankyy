import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vite from "./pages/Vite";

export default function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/vite" element={<Vite />}></Route>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    );
}
