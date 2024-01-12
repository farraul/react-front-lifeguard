import { Outlet } from 'react-router-dom'; //para mostrar children
import { SnackbarUtilitiesConfigurator } from 'src/utilities';
import { Header } from '../components/Header';
import React from 'react';

function Layout() {
  return (
    <>
      <SnackbarUtilitiesConfigurator />
      <Header />
      <main className='p-40 py-32'>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
