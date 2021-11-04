import React from "react";
import Head from "next/head";
import { css } from "@emotion/react";

interface DefaultLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { title = "My Website", children } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>{/* topbar */}</header>
      <div css={body}>{children}</div>
      <div css={footer}>
        <p style={{ fontSize: "1.3rem", fontWeight: 600 }}>
          Copyright ©<span style={{ color: "#1e7d34" }}> 2021 Thet Aung.</span> All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
};

const body = css`
  box-sizing: inherit;
  width: 100%;
  min-height: calc(100vh - 104px);
  display: flex;
  flex-direction: column;
`;

const footer = css`
  padding: 1.5rem 2rem;
  border-top: var(--seperation-line);
`;

export default DefaultLayout;
