import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import bookmarkReducer from '../features/bookmarks/bookmarkSlice';
import { pixabayApi } from '../services/pixabayApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bookmarks: bookmarkReducer,
    [pixabayApi.reducerPath]: pixabayApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pixabayApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
