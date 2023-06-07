import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Layout } from './Layout/Layout';
import {HomePage} from '../pages/Home/HomePage';
import {RegisterPage} from '../pages/Register/RegisterPage';
import {LoginPage} from '../pages/Login/LoginPage';
import {ContactsPage} from '../pages/Contacts/Contacts';

export const App = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};

// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { AppBar } from './AppBar/AppBar';
// import { Layout } from './Layout/Layout';

// const HomePage = lazy(() => import('../pages/Home/HomePage'));
// const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
// const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

// export const App = () => {
//   return (
//     <>
//       <AppBar />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/contacts" element={<ContactsPage />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

App.displayName = 'App';

// export const App = () => {
//   return (
//     <>
//       <AppBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </>
//   );
// };
