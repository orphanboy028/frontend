import "../styles/globals.css";
import { MyContextProvider } from "../ContaxtApi/ContextApi";
import { UserContextProvider } from "../ContaxtApi/UserContaxApi";

function MyApp({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </MyContextProvider>
  );
}

export default MyApp;
