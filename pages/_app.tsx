import { AppProps } from "next/app";
import { wrapper } from "@/store/store";
import { InitialPageProps } from "@/interfaces/redux.interface";
import "../styles/globals.css";

interface Props extends InitialPageProps, AppProps {}

const App = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
