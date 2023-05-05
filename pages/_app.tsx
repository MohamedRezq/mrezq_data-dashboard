import "@/styles/globals.css";
import 'react-accessible-accordion/dist/fancy-example.css';
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
