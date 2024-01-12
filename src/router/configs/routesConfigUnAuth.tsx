import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Spinner } from 'src/components/Loaders';
import { Layout } from 'src/layouts';

const LoginPage = lazy(() => import('src/pages/NoAuthenticated/LoginPage'));
const RegisterPage = lazy(() => import('src/pages/NoAuthenticated/RegisterPage'));
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
            element: (
              <Suspense fallback={<Spinner />}>
                <LoginPage />
              </Suspense>
            ),
          },
          {
            path: '/register',
            element: (
              <Suspense fallback={<Spinner />}>
                <RegisterPage />
              </Suspense>
            ),
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