import "@/styles/globals.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "rc-dropdown/assets/index.css";
import type { AppProps } from "next/app";
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
