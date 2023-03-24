import "../styles/globals.css";
import { MyContextProvider } from "../ContaxtApi/ContextApi";
import { UserContextProvider } from "../ContaxtApi/UserContaxApi";
import { CategoriesContextProvider } from "../ContaxtApi/categoriesContextApi";
import { ProductsContextProvider } from "../ContaxtApi/ProductContextApi";
import EnquiriyContextProvider from "../ContaxtApi/EnquiriyContexApi";

function MyApp({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <UserContextProvider>
        <CategoriesContextProvider>
          <ProductsContextProvider>
            <EnquiriyContextProvider>
              <Component {...pageProps} />
            </EnquiriyContextProvider>
          </ProductsContextProvider>
        </CategoriesContextProvider>
      </UserContextProvider>
    </MyContextProvider>
  );
}

export default MyApp;
