import type { Config } from "@react-router/dev/config";

export default {
    // Config options...
    // Server-side render by default, to enable SPA mode set this to `false`
    appDirectory: "src",
    basename: process.env.NODE_ENV === "production" ? process.env.BASE_PUBLIC_PATH : "/",
    ssr: true
} satisfies Config;
