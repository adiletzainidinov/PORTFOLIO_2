import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppRouter from '../pages/AppRouter';
import ErrorPage from '../pages/ErrorPage ';


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppRouter/>,
      errorElement: <ErrorPage/>
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
};

export default App;
