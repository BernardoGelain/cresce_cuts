import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "cart", //chave principal para persistencia do estado
  storage, // Configuração do armazenamento (neste caso, localStorage)
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer, //reducer para o carrinho
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ações ignoradas durante a verificação de serialização(Não sei o que é)
      },
    }),
});

//Criação do persistor usado em App
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
