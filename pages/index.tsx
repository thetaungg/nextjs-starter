import { css } from "@emotion/react";

import RealTimeClock from "@/components/common/RealTimeClock/RealTimeClock.component";
import DefaultLayout from "@/layouts/DefaultLayout";
import NextJSLogo from "@/public/next-js-seeklogo.com.svg";

export default function Home() {
    return (
        <DefaultLayout>
            <div css={container}>
                <h1 css={header}>Welcome to</h1>
                <div css={logoContainer}>
                    <NextJSLogo />
                </div>
                <h1 css={header}>Starter</h1>
                <RealTimeClock />
            </div>
        </DefaultLayout>
    );
}

const container = css`
    flex-grow: 1;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const header = css`
    font-size: 6rem;
    color: #000000;
    font-weight: 400;
`;

const logoContainer = css`
    width: 30rem;
    svg {
        width: 100%;
        height: auto;
    }
`;
