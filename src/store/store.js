import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import editProfileSlice from './slices/edit-profile-slice/editProfileSlice';

const rootReducer = combineReducers({
  [editProfileSlice.name]: editProfileSlice.reducer,
});

const persistConfig = {
  key: 'EDITPROFILE',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;