import { createBrowserRouter } from 'react-router-dom';
import { Spinner } from 'src/components/Loaders';
import { Suspense, lazy } from 'react';
import Layout from 'src/layouts';

const ProfilePage = lazy(() => import('src/pages/authenticated/ProfilePage'));
const ErrorPage = lazy(() => import('src/pages/authenticated/ErrorPage'));
const ReservationPage = lazy(() => import('src/pages/authenticated/ReservationPage'));

export const routesConfigAuth = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Spinner />}>
                <ReservationPage />
              </Suspense>
            ),
          },
          {
            path: '/profile',
            element: (
              <Suspense fallback={<Spinner />}>
                <ProfilePage />
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
