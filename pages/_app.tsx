import type { AppProps } from "next/app";
//-----> Redux <--------------------------------------------------//
import { store, persistor } from "@/src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
//-----> Styles <-------------------------------------------------//
import "@/src/globals.css";
//-----------------------------------------------------------------//
//- END OF IMPORTS -----------------------------------------------//
//----------------------------------------------------------------//

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
