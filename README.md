# ReGluP

**A minimal yet customisable template for building statically generated React projects.**

## Contents

- [Motivation](#motivation)
- [Features](#features)
- [Getting Started](#getting-started)
    - [GitHub Pages](#github-pages)
- [Why React?](#why-react)

## Motivation

Whether it's trying to configure an entire framework, such as [React Router](https://reactrouter.com) or [Vike](https://vike.dev), just to be able to find an alternative to [react-static](https://github.com/react-static/react-static) to pre-render your project, or wondering why the React 19 announcement blog recommends [react-helmet](https://github.com/nfl/react-helmet), a library that hasn't been updated in over half a decade, trying to configure a project in React can be somewhat irritating.

Reglup aims to provide the most user friendly starting point when creating statically generated React projects.

Don't worry as Reglup isn't a framework or library, just some scaffolding around `npm create vite@latest`, so you can easily add any other tools or libraries into your project like you normally would.

## Features

- Static Site Generation

    - Pre-render your project into a collection of statically generated files.
    - Easily host your project on any static site hosting service.

- Barebones Boilerplate with Full Flexibility

    - Reglup has only 2 dependencies: `react` and `react-dom`.
    - Reglup is just some extra boilerplate around `npm create vite@latest`, so you can easily include any other tools or libraries into your project like you normally would.
    - TypeScript, ESLint, and Prettier are included as industry standards but can be easily removed.

- Native GitHub Pages Support

    - Native Static Site Generation support.
    - Automatic deployment to [GitHub Pages](https://pages.github.com).

- Standardised Configuration Files

    - All configuration files use the `.config.ts` format as default.
    - No need to worry about the several possible formats (`.prettierrc`, `.prettierrc.yaml`, `.prettierrc.cts` etc.) tools use.

## Getting Started

### GitHub Pages

1. Use this template to create a new repository.
2. Set `base` in the `vite.config.ts` file to the name of your repository.

    - e.g., If your repository is `github.com/ostromia/reglup`, your `vite.config.ts` file should look like this:

    ```typescript
    import react from "@vitejs/plugin-react";
    import { defineConfig } from "vite";

    // https://vite.dev/config/
    export default defineConfig({
        base: "reglup",
        plugins: [react()]
    });
    ```

3. Commit this change and push it to your repository.
4. Run the `npm run deploy` command in your repository.
5. Go back to your repository on GitHub and select `Settings` and then `Pages`.
6. Ensure `Source` is set to `Deploy from a branch` and `Branch` is set to `build`.
7. Your website should now be live to view at `<username>.github.io/<repository name>`.
    - e.g., If you repository is `github.com/ostromia/reglup`, you can view your website at `ostromia.github.io/reglup`.

## Why React?

As enjoyable as using [Svelte](https://svelte.dev) is for web development, chances are [you're going to end up using React](https://survey.stackoverflow.co/2024/technology#1-web-frameworks-and-technologies).

Instead of jumping straight into the deep end and end up wasting several hours of your time trying to configure user authentication into a full stack React application, like I have, building statically generated React apps is a good starting point for learning the fundamentals of React.
