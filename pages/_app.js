import "../styles/globals.css";
import { MyContextProvider } from "../ContaxtApi/ContextApi";
import { UserContextProvider } from "../ContaxtApi/UserContaxApi";
import { CategoriesContextProvider } from "../ContaxtApi/categoriesContextApi";

function MyApp({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <UserContextProvider>
        <CategoriesContextProvider>
          <Component {...pageProps} />
        </CategoriesContextProvider>
      </UserContextProvider>
    </MyContextProvider>
  );
}

export default MyApp;
