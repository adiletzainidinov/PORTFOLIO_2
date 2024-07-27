import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppRouter from './pages/app-router/AppRouter';
import ErrorPage from './pages/error-page/ErrorPage ';
import About from './pages/about/About';
import Layout from './layouts/Layout';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppRouter />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/about',
      element: <Layout />,
      children: [{
        path: 'about',
        element: <About/>
      }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
