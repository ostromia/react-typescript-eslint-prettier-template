import { useState } from "react";
import reactRouterLogo from "../assets/react-router.svg";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "../styles/home.css";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" }
    ];
}

function Home() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo vite" alt="Vite logo" />
                </a>

                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react logo-spin" alt="React logo" />
                </a>

                <a href="https://reactrouter.com/" target="_blank">
                    <img src={reactRouterLogo} className="logo react-router" alt="Vite logo" />
                </a>
            </div>

            <div>
                <h1>Vite + React + React Router</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">Click on the logos to learn more</p>
            </div>
        </div>
    );
}

export default Home;
