import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Spinner } from 'src/components/Loaders';
import { Layout } from 'src/layouts';

const LoginPage = lazy(() => import('src/pages/noAuthenticated/LoginPage'));
const RegisterPage = lazy(() => import('src/pages/noAuthenticated/RegisterPage'));
const ErrorPage = lazy(() => import('src/pages/authenticated/ErrorPage'));
const Home = lazy(() => import('src/pages/noAuthenticated/HomePage'));
const ReserveLeadPage = lazy(() => import('src/pages/authenticated/ReserveLeadPage '));
const ReserveLifeguardPage = lazy(() => import('src/pages/authenticated/ReserveLifeguardPage'));

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
                <Home />
              </Suspense>
            ),
          },
          {
            path: '/login',
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
            path: '/reserve-lead',
            element: (
              <Suspense fallback={<Spinner />}>
                <ReserveLeadPage />
              </Suspense>
            ),
          },
          {
            path: '/reserve-lifeguard',
            element: (
              <Suspense fallback={<Spinner />}>
                <ReserveLifeguardPage />
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
