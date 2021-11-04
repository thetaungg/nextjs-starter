import { css } from "@emotion/react";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div css={container}>
        <h1>Hello</h1>
      </div>
    </DefaultLayout>
  );
}

const container = css`
  padding: 0 2rem;
`;
