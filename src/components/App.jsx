import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

// Lazy-loaded components
const HomePage = lazy(() => import('../pages/Home/HomePage'));
const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RegisterPage />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="/contacts"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ContactsPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

