import { css } from "@emotion/react";
import Head from "next/head";
import React from "react";

interface DefaultLayoutProps {
    title?: string;
    children: React.ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
    const { title = "Next.js Starter", children } = props;
    return (
        <div css={container}>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header>{/* topbar */}</header>
            <div css={body}>{children}</div>
            <div css={footer}>
                <p style={{ fontSize: "1.3rem", fontWeight: 600 }}>
                    Copyright ©
                    <span style={{ color: "#1e7d34" }}> {new Date().getUTCFullYear()} Thet Aung.</span> All
                    rights reserved.{" "}
                </p>
            </div>
        </div>
    );
};

const container = css`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const body = css`
    box-sizing: inherit;
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

const footer = css`
    padding: 1.5rem 2rem;
    border-top: var(--seperation-line);
`;

export default DefaultLayout;
