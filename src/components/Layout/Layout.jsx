import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';
import css from './Layout.module.css';


export const Layout = () => {
  

  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
