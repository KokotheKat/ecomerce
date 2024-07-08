import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

import { GlobalStyles } from "./styles/GlobalStyles";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="/product/:id"
              element={<ProductPage></ProductPage>}
            ></Route>
            <Route path="*" element={<HomePage></HomePage>}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
};
