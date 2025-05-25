import React from "react";

type Props = {
    title: string;
    description: string;
};

function Head({ title, description }: Props) {
    return (
        <>
            {/* Global Metadata  */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="generator" content={`React ${React.version}`} />

            {/* Favicon */}
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
        </>
    );
}

export default Head;
