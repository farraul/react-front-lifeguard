import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from 'src/layouts';
const ErrorPage = lazy(() => import('src/pages/Authenticated/ErrorPage'));

export const routesConfigUnAuth = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            async lazy() {
              const { LoginPage } = await import('src/pages/NoAuthenticated/');
              return { Component: LoginPage };
            },
          },
          {
            async lazy() {
              const { RegisterPage } = await import('src/pages/NoAuthenticated/');
              return { Component: RegisterPage };
            },
          },
          {
            path: '*',
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);
