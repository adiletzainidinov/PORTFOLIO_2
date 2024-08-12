import React, { useEffect } from 'react';
import store, { persistor } from './store/store.js';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Loader from './pages/loader/Loader.jsx';
import {
  loaderFalse,
  loaderTrue,
} from './store/slices/edit-profile-slice/editProfileSlice.js';

const Root = () => {
  const isLoading = useSelector((state) => state.editProfile.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderTrue());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        dispatch(loaderFalse());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, dispatch]);

  return (
    <PersistGate persistor={persistor}>
      {isLoading ? <Loader /> : <App />}
    </PersistGate>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);
