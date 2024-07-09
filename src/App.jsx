import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { GlobalStyles } from "./styles/GlobalStyles";
import { HomePage } from "./pages/HomePage";
import { Product } from "./components/Product";

export const App = () => {
  return (
		<div>
			<BrowserRouter>
				<GlobalStyles />
				<Provider store={store}>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/:id' element={<Product />} />
						</Routes>
				</Provider>
			</BrowserRouter>
		</div>
	);
};
