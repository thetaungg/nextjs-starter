import "@/styles/globals.css";

import { AppProps } from "next/app";

import { InitialPageProps } from "@/interfaces/redux.interface";
import { wrapper } from "@/store/store";

interface Props extends InitialPageProps, AppProps {}

const App = ({ Component, pageProps }: Props) => {
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
