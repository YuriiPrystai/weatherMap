import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  console.log(store.getState());
})

export type AppDispatch = typeof store.dispatch;
