import { useEffect, useState } from "react";

export default function useThemeDetector(): "dark" | "light" {
    const [dark, setDark] = useState<boolean>(getCurrentTheme());
    function getCurrentTheme(): boolean {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    function listener(e: MediaQueryListEvent) {
        setDark(e.matches);
    }
    useEffect(() => {
        const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        darkTheme.addEventListener("change", listener);
        return () => darkTheme.removeEventListener("change", listener);
    });
    return dark ? "dark" : "light";
}
