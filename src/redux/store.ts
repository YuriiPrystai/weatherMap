import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['worldsCities'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);

store.subscribe(() => {
  console.log(store.getState());
})

export { store, persistor };

export type AppDispatch = typeof store.dispatch;
