import "../styles/globals.css";
import { MyContextProvider } from "../ContaxtApi/ContextApi";

function MyApp({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}

export default MyApp;
