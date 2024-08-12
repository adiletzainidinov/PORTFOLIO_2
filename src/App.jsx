import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/error-page/ErrorPage ';
import Layout from './layouts/Layout';
import Home from './pages/home/AppRouter';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Loader from './pages/loader/Loader';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
      ],
    },
    {
      path: '/loading',
      element: <Loader/>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
