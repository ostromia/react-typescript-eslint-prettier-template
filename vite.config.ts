import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === "production" ? process.env.BASE_PUBLIC_PATH : "/",
    plugins: [reactRouter()]
});
