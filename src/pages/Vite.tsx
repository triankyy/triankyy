import { useState, useEffect } from "react";
import reactLogo from "../assets/icons/react.svg";
import styles from "../css/Vite.module.css";

export default function Vite(): JSX.Element {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = "Vite + React + TS";
        import("../css/Vite.css");
    });
    return (
        <div className={styles.App}>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className={`${styles.logo} ${styles.react}`}
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className={styles.Card}>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={styles.readTheDocs}>Click on the Vite and React logos to learn more</p>
        </div>
    );
}
