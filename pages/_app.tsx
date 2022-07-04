import "@/public/css/globals.css";

import { AppContext, AppProps } from "next/app";

import { InitialPageProps } from "@/interfaces/redux.interface";
import { wrapper } from "@/store/store";

interface Props extends InitialPageProps, AppProps {}

const App = ({ Component, pageProps }: Props) => {
    return <Component {...pageProps} />;
};

// for Authentication
App.getInitialProps = wrapper.getInitialAppProps(
    (_store) =>
        async ({ Component, ctx }: AppContext): Promise<InitialPageProps> => {
            let pageProps = {};

            if (Component.getInitialProps) {
                pageProps = await Component.getInitialProps(ctx);
            }

            return {
                pageProps,
            };
        }
);

export default wrapper.withRedux(App);
