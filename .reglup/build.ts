import { execSync } from "child_process";
import { readFileSync, writeFileSync, rmSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

function run(command: string) {
    execSync(command, { stdio: "inherit" });
}

const __root = dirname(dirname(fileURLToPath(import.meta.url)));

run("npm run build");
run("npx vite build --ssr src/entry-server.tsx --outDir dist/server");

const { render } = await import(resolve(__root, "dist/server/entry-server.js"));

let index = readFileSync(resolve("dist/index.html"), "utf-8");
index = index.replace(`<!--app-html-->`, render().html);

rmSync(resolve(__root, "dist/server"), { recursive: true, force: true });

writeFileSync(resolve(__root, "dist/index.html"), index);
