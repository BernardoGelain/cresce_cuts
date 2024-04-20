import { PersistGate } from "redux-persist/integration/react";
import { ThemeContextProvider } from "./contexts/themeContext";
import Routes from "./routes/Routes";
import { persistor, store } from "./lib/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ThemeContextProvider>
          <Routes />
        </ThemeContextProvider>
      </Provider>
    </PersistGate>
  );
}

export default App;
