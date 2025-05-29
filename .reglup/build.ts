import { execSync } from "child_process";
import { readFileSync, writeFileSync, rmSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

function run(command: string) {
    execSync(command, { stdio: "inherit" });
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = dirname(__dirname);

run("npm run build");
run("npx vite build --ssr src/entry-server.tsx --outDir dist/server");

const { render } = await import(resolve(root, "dist/server/entry-server.js"));

const template = readFileSync(resolve("dist/index.html"), "utf-8");
const { html: html } = render();
const final = template.replace(`<!--app-html-->`, html);

rmSync(resolve(root, "dist/server"), { recursive: true, force: true });

writeFileSync(resolve(root, "dist/index.html"), final);
