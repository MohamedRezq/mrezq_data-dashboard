import type { AppProps } from "next/app";
//-----> redux <--------------------------------------------------//
import { persistor, store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
//-----> styles <-------------------------------------------------//
import "@/globals.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "rc-dropdown/assets/index.css";
//- END OF IMPORTS -----------------------------------------------//

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
